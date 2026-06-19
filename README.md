# DSJ04 React Podcast App: Search, Sort, Filter, and Pagination

## Project Overview

This React project was built to deliver an advanced podcast browsing experience that allows users to dynamically **search**, **sort**, **filter**, and **paginate** a list of podcast shows. The focus is on creating an intuitive interface that responds to user input in real time while keeping state consistent across navigation.

---

## Core Objectives

### 🔍 Search Functionality

- Match any part of a podcast title.
- Update results live as the user types.
- Integrate seamlessly with filters, sorts, and pagination.

### Sorting Options

- Sort podcasts by:
  - Newest first (last updated date).
  - Title A–Z and Z–A.
- Sorting works alongside search and filter criteria.

### 🎭 Filtering

- Genre-based filtering via dropdown.
- Filters persist across pages and state changes.

### 📄 Pagination

- Paginate podcasts into manageable chunks.
- Pagination respects active search, filter, and sort state.
- UI selections remain intact while navigating.

### ⚡ State Synchronisation

- Centralised state management with React Context.
- All controls stay in sync and reflect changes immediately.

### 🧹 Code Quality

- JSDoc documentation for major functions and modules.
- Consistent formatting and naming conventions.
- Modular, reusable components.

### API Endpoints

Data can be called via a `fetch` request to the following endpoint.

| URL                               |                             |
| --------------------------------- | --------------------------- |
| `https://podcast-api.netlify.app` | Returns an array of PREVIEW |

### Genre Titles

Since the podcast preview information fetched from the API only exposes genres by their IDs, the actual genre details (such as titles) are not included in the API response. These details are instead provided in the data.js file found in this repository. Therefore, it is recommended that you include the mapping between genre ID values and their corresponding titles in your code using this file.

## Project Deliverables

- Fully functional React app:
  - Fetches and displays podcast data.
  - Supports live search, sorting, filtering, and pagination.
  - Maintains consistent state across interactions.

- Clean codebase:
  - Reusable components.
  - Clear formatting.
  - JSDoc documentation.

- README.md:
  - Overview and purpose.
  - Setup and usage instructions.
  - Key features explained.

- Version Control:
  - Clear commit messages.
  - Incremental commits showing progress.

  ***

## Success Criteria

- No console errors or broken UI.
- Features work together without losing state.
- Clean, maintainable codebase.
- Polished, responsive user experience.

---
