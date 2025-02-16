import { useReducer, useEffect, useRef, Suspense } from "react";
import "./styles.css"; // Import CSS file

// API function to fetch data
const fetchItems = async (page: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=4`
  );
  return response.json();
};

// Reducer function to manage state
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return {
        ...state,
        items: [...state.items, ...action.payload],
        loading: false,
        hasMore: action.payload.length > 0, // Stop loading if no more data
      };
    case "ERROR":
      return { ...state, loading: false, error: action.error };
    case "INCREMENT_PAGE": 
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};

const Pagination = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    page: 1,
    loading: false,
    error: null,
    hasMore: true, // Track if more data exists
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  // Fetch data when page changes
  useEffect(() => {
    if (state.loading || !state.hasMore) return; // Prevent multiple API calls or stop if no more data

    dispatch({ type: "LOADING" });

    fetchItems(state.page)
      .then((data) => dispatch({ type: "SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "ERROR", error }));
  }, [state.page]);

  // Intersection Observer with debounce effect
  useEffect(() => {
    let debounceTimeout: any = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !state.loading && state.hasMore) {
          if (debounceTimeout) clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(() => {
            dispatch({ type: "INCREMENT_PAGE" });
          }, 500); // Delay to prevent multiple calls
        }
      },
      { threshold: 0.8 } // Adjusted threshold to 80% to avoid frequent calls
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [state.loading, state.hasMore]);

  return (
    <div className="container">
      <h2>Lazy Loaded Pagination</h2>
      <ul>
        {state.items.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      {/* Loading Spinner */}
      {state.loading && (
        <p className="loading">
          Loading more items <span className="spinner"></span>
        </p>
      )}

      {!state.hasMore && <p className="end-message">🎉 No more data to load!</p>}

      {/* Invisible div to trigger intersection observer */}
      <div ref={observerRef} className="observer-trigger"></div>
    </div>
  );
};

export default function () {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Pagination />
    </Suspense>
  );
}
