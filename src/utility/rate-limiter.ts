// This piece of code is exact implementation from Nextjs Canary Example
// https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/utils/rate-limit.ts
// This can cause the server to slow down if the cache is hold for longer time for many users.

import { NextApiResponse, NextApiRequest } from "next";
import { LRUCache } from "lru-cache";
import { nanoid } from "nanoid";

const RATE_LIMITER_USER_ID_COOKIE_NAME = "userUuid" as const;
const RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME = "userUuid_expires" as const;

type options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
  getUserId: (req: NextApiRequest, res: NextApiResponse) => string; // eslint-disable-line no-unused-vars
};

export function rateLimiterApi(options?: options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 50,
    ttl: options?.interval || 60000,
  });

  return {
    check: (res: NextApiResponse, req: NextApiRequest, limit: number) =>
      new Promise<{ status: number; message: string }>((resolve, reject) => {
        try {
          const userId = options?.getUserId(req, res);
          if (!userId) {
            reject({ status: 400, message: "Token missing" });
            return;
          }
          const token = `user:${userId}`;

          const tokenCount = (tokenCache.get(token) as number[]) || [0];
          if (tokenCount[0] === 0) {
            tokenCache.set(token, tokenCount);
          }
          tokenCount[0] += 1;

          const currentUsage = tokenCount[0];
          const isRateLimited = currentUsage >= limit;
          res.setHeader("X-RateLimit-Limit", limit);
          res.setHeader(
            "X-RateLimit-Remaining",
            isRateLimited ? 0 : limit - currentUsage,
          );

          if (isRateLimited) {
            reject({ status: 429, message: "Rate limit exceeded" });
          } else {
            resolve({ status: 200, message: "Success" });
          }
        } catch {
          reject({ status: 500, message: "Internal server error" });
        }
      }),
  };
}

export const getUserId = (req: NextApiRequest, res: NextApiResponse) => {
  const userIp =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
  const userAgent = req.headers["user-agent"] || "";

  // If User has an userIp and userAgent return that
  // No need to set cookies as the userIp and userAgent are sufficient to rateLimit
  if (userIp && userAgent) {
    return `${userIp}-${userAgent}`;
  }

  // If userId and expiry date cookie are present and we are unable to get userIp and userAgent of user.
  if (
    req.cookies[RATE_LIMITER_USER_ID_COOKIE_NAME] &&
    req.cookies[RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME]
  ) {
    const expiryDate = new Date(
      req.cookies[RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME],
    );
    // If user id have expired set new expiry date cookie
    if (expiryDate <= new Date()) {
      // If expired give user a new Id and expiry date
      // TODO: keep the userUuid same and update only the expiry date + updating the LRU cache
      setTokenExpiryCookie(res);
      return setUserTokenCookie(res);
    }
    return req.cookies[RATE_LIMITER_USER_ID_COOKIE_NAME];
  }

  // If no userIp, userAgent and cookies can be found set the cookies
  setTokenExpiryCookie(res);
  return setUserTokenCookie(res);
};

const setUserTokenCookie = (res: NextApiResponse) => {
  const userUuidToken = nanoid(20);
  res.setHeader(
    "Set-Cookie",
    `${RATE_LIMITER_USER_ID_COOKIE_NAME}=${userUuidToken}; Max-Age=${
      60 * 60 * 24
    }; SameSite=Strict`,
  );
  return userUuidToken;
};

const setTokenExpiryCookie = (res: NextApiResponse) => {
  const newExpirationDate = new Date();
  newExpirationDate.setSeconds(newExpirationDate.getSeconds() + 60 * 60 * 24);
  res.setHeader(
    "Set-Cookie",
    `${RATE_LIMITER_EXPIRY_DATE_COOKIE_NAME}=${newExpirationDate.toUTCString()}; Max-Age=${
      60 * 60 * 24
    }; SameSite=Strict`,
  );
};
