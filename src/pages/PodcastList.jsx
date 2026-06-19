import PodcastGrid from "../components/PodcastGrid";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import GenreFilter from "../components/GenreFilter";
import PaginationControls from "../components/PaginationControls";
import PageSizeSelector from "../components/PageSizeSelector";
import { usePodcastContext } from "../context/PodcastContext";

export default function PodcastList() {
  const {
    loading,
    error,
    paginatedPodcasts,
    genres,
    searchQuery,
    selectedGenre,
    sortBy,
    currentPage,
    totalPages,
    onSearch,
    onSelectGenre,
    onSortChange,
    onPageChange,
    onPageSizeChange,
    pageSize,
  } = usePodcastContext();

  if (loading) {
    return (
      <div className="message-container">
        <div className="spinner"></div>
        <p>Loading podcasts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="message-container">
        <div className="error">Error loading podcasts: {error}</div>
      </div>
    );
  }

  return (
    <section className="podcast-list">
      <div className="controls-row">
        <SortDropdown value={sortBy} onChange={onSortChange} />
        <SearchBar value={searchQuery} onSearch={onSearch} />
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={onSelectGenre}
        />
      </div>

      {paginatedPodcasts.length === 0 ? (
        <div className="message-container">
          <p>No podcasts match your current filters.</p>
        </div>
      ) : (
        <PodcastGrid podcasts={paginatedPodcasts} genres={genres} />
      )}

      <PageSizeSelector value={pageSize} onChange={onPageSizeChange} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
}
