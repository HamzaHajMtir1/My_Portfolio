import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import {
  HiXMark,
  HiChevronLeft,
  HiChevronRight,
  HiPhoto,
  HiPlay,
} from "react-icons/hi2";
import { HiPhotograph, HiFilm } from "react-icons/hi";

import { type Album, type MediaItem } from "@/data/activities";

// Album cover card component
interface AlbumCardProps {
  album: Album;
  index: number;
  onClick: () => void;
}

function AlbumCard({ album, index, onClick }: AlbumCardProps) {
  const [imageError, setImageError] = useState(false);
  const imageCount = album.media.filter((m) => m.type === "image").length;
  const videoCount = album.media.filter((m) => m.type === "video").length;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-800"
      onClick={onClick}
    >
      {/* Album cover image */}
      <div className="aspect-[4/3] w-full">
        {imageError ? (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-800 p-4 text-center">
            <HiPhoto className="mb-2 h-12 w-12 text-zinc-500" />
            <span className="text-sm text-zinc-400">{album.title}</span>
          </div>
        ) : (
          <Image
            src={album.coverImage}
            alt={album.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Overlay with album info */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
        {/* Media count badges */}
        <div className="mb-2 flex gap-2">
          {imageCount > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
              <HiPhotograph className="h-3 w-3" />
              {imageCount}
            </span>
          )}
          {videoCount > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
              <HiFilm className="h-3 w-3" />
              {videoCount}
            </span>
          )}
        </div>

        {/* Album title and date */}
        <h3 className="text-lg font-bold text-white">{album.title}</h3>
        <span className="text-xs text-zinc-300">{album.date}</span>
      </div>

      {/* Hover border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-accent/50" />
    </motion.div>
  );
}

// Media thumbnail in album view
interface MediaThumbnailProps {
  media: MediaItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function MediaThumbnail({
  media,
  index,
  isActive,
  onClick,
}: MediaThumbnailProps) {
  const [imageError, setImageError] = useState(false);
  const thumbnailSrc =
    media.type === "video" && media.thumbnail ? media.thumbnail : media.src;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={`relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg transition-all sm:w-32 ${
        isActive
          ? "ring-2 ring-accent ring-offset-2 ring-offset-black"
          : "opacity-70 hover:opacity-100"
      }`}
    >
      {imageError ? (
        <div className="flex h-full w-full items-center justify-center bg-zinc-700">
          <HiPhoto className="h-6 w-6 text-zinc-500" />
        </div>
      ) : (
        <Image
          src={thumbnailSrc}
          alt={media.alt}
          fill
          sizes="128px"
          className="object-cover"
          onError={() => setImageError(true)}
        />
      )}

      {/* Video indicator */}
      {media.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <HiPlay className="h-6 w-6 text-white" />
        </div>
      )}
    </motion.button>
  );
}

// Album detail lightbox with media viewer
interface AlbumLightboxProps {
  album: Album | null;
  isOpen: boolean;
  onClose: () => void;
}

function AlbumLightbox({ album, isOpen, onClose }: AlbumLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaError, setMediaError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentMedia = album?.media[currentIndex];

  // Reset state when album changes
  useEffect(() => {
    setCurrentIndex(0);
    setMediaError(false);
  }, [album]);

  // Reset error when media changes
  useEffect(() => {
    setMediaError(false);
    // Pause video when switching
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !album) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          setCurrentIndex((prev) => Math.max(0, prev - 1));
          break;
        case "ArrowRight":
          setCurrentIndex((prev) => Math.min(album.media.length - 1, prev + 1));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, album, onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!album || !currentMedia) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={onClose}
        >
          {/* Header with album title and close button */}
          <div className="flex items-center justify-between p-4">
            <h3 className="hidden text-lg font-semibold text-white sm:block">
              {album.title}
            </h3>

            <button
              onClick={onClose}
              className="rounded-full bg-zinc-800/80 p-2 text-white transition-colors hover:bg-zinc-700"
              aria-label="Close"
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>

          {/* Main media viewer */}
          <div
            className="relative flex flex-1 items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous button */}
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              className="absolute left-4 z-10 rounded-full bg-zinc-800/80 p-2 text-white transition-colors hover:bg-zinc-700 disabled:opacity-30"
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>

            {/* Media content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-[60vh] w-full max-w-5xl items-center justify-center sm:h-[70vh]"
            >
              {mediaError ? (
                <div className="flex flex-col items-center justify-center rounded-xl bg-zinc-800 p-8">
                  <HiPhoto className="mb-4 h-16 w-16 text-zinc-500" />
                  <span className="text-zinc-400">Media unavailable</span>
                </div>
              ) : currentMedia.type === "video" ? (
                <video
                  ref={videoRef}
                  src={currentMedia.src}
                  controls
                  className="max-h-full max-w-full rounded-lg"
                  onError={() => setMediaError(true)}
                >
                  Your browser does not support video playback.
                </video>
              ) : (
                <div className="relative h-full w-full">
                  <Image
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    fill
                    sizes="90vw"
                    className="rounded-lg object-contain"
                    priority
                    onError={() => setMediaError(true)}
                  />
                </div>
              )}
            </motion.div>

            {/* Next button */}
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(album.media.length - 1, prev + 1),
                )
              }
              className="absolute right-4 z-10 rounded-full bg-zinc-800/80 p-2 text-white transition-colors hover:bg-zinc-700 disabled:opacity-30"
              disabled={currentIndex === album.media.length - 1}
              aria-label="Next"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Caption */}
          {currentMedia.caption && (
            <div className="px-4 py-2 text-center">
              <p className="text-sm text-white">{currentMedia.caption}</p>
            </div>
          )}

          {/* Thumbnail strip */}
          <div className="border-t border-zinc-800 p-4">
            <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto pb-2">
              {album.media.map((media, index) => (
                <MediaThumbnail
                  key={media.id}
                  media={media}
                  index={index}
                  isActive={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <div className="mt-2 text-center text-sm text-zinc-500">
              {currentIndex + 1} / {album.media.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ActivityGalleryProps {
  albums: Album[];
}

export default function ActivityGallery({ albums }: ActivityGalleryProps) {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openAlbum = useCallback((album: Album) => {
    setSelectedAlbum(album);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setSelectedAlbum(null);
  }, []);

  if (albums.length === 0) return null;

  return (
    <section className="mx-auto my-24 max-w-7xl px-6 sm:px-14 md:my-32 md:px-20">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:mb-16"
      >
        <h2 className="bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Gallery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Explore albums from workshops, events, and community activities.
        </p>
      </motion.div>

      {/* Album grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {albums.map((album, index) => (
          <AlbumCard
            key={album.id}
            album={album}
            index={index}
            onClick={() => openAlbum(album)}
          />
        ))}
      </div>

      {/* Album lightbox */}
      <AlbumLightbox
        album={selectedAlbum}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </section>
  );
}
