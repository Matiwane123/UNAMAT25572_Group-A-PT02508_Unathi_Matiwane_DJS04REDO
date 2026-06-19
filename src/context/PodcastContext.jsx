import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchPodcasts } from "../api/fetchPodcasts";
import { genres as genreData } from "../data";

const PodcastContext = createContext(null);

export function PodcastProvider({ children }) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortBy, setSortBy] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedGenre, sortBy]);

  const filteredPodcasts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return podcasts
      .filter((podcast) => {
        const matchesSearch =
          !normalizedSearch ||
          podcast.title.toLowerCase().includes(normalizedSearch);
        const matchesGenre =
          selectedGenre === null || podcast.genres.includes(selectedGenre);
        return matchesSearch && matchesGenre;
      })
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }

        if (sortBy === "seasons") {
          return b.seasons - a.seasons;
        }

        if (sortBy === "updated") {
          return new Date(b.updated) - new Date(a.updated);
        }

        return 0;
      });
  }, [podcasts, searchQuery, selectedGenre, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredPodcasts.length / pageSize));
  const paginatedPodcasts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredPodcasts.slice(start, start + pageSize);
  }, [filteredPodcasts, currentPage]);

  return (
    <PodcastContext.Provider
      value={{
        loading,
        error,
        paginatedPodcasts,
        genres: genreData,
        searchQuery,
        selectedGenre,
        sortBy,
        currentPage,
        totalPages,
        onSearch: setSearchQuery,
        onSelectGenre: setSelectedGenre,
        onSortChange: setSortBy,
        onPageChange: setCurrentPage,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
}

export function usePodcastContext() {
  const context = useContext(PodcastContext);
  if (!context) {
    throw new Error("usePodcastContext must be used within a PodcastProvider");
  }
  return context;
}
