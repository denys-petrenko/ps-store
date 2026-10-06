import styles from "./Searcher.module.scss";
import searchBtn from "../../../../assets/header/search.svg";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../../store/slices/productsSlice";
import SearchResultCard from "./SearchResultCard/SearchResultCard";
import { useNavigate } from "react-router-dom";


const Searcher = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    const query = search.trim().toLowerCase();
    const { items } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const handleCloseSearch = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowResult(false);
            }
        }

        document.addEventListener("click", handleCloseSearch);
        return () => document.removeEventListener("click", handleCloseSearch)
    }, [])

    useEffect(() => {
        if (!items.length) {
            dispatch(fetchAllProducts());
        }
    }, [dispatch, items]);

    const filteredItems = query
        ? items.filter(item => item.name.toLowerCase().includes(query))
        : [];

  

    return (
        <div
            className={styles.searcher}
            ref={searchRef}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!search.trim()) return;
                    navigate(`/ps-store/search?q=${encodeURIComponent(search)}`);
                    setShowResult(false);
                }}
                className={styles.searchForm}
            >
                <input
                    type="text"
                    name="search"
                    placeholder={t("header.placeholder")}
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;

                        setSearch(value);
                        setShowResult(value.trim().length > 0);
                    }}
                    className={styles.searchInput}
                />
                <button
                    className={styles.searchBtn}
                >
                    <img src={searchBtn} alt="Search" className={styles.searchLogo} />
                </button>
            </form>
            <div className={`${styles.result} ${showResult ? styles.active : ""}`}>
                {query && !filteredItems.length
                    ? "No result"
                    : filteredItems.map(item => (
                        <SearchResultCard
                            key={item.id}
                            item={item}
                            onClick={() => {
                                setSearch("");
                                setShowResult(false);
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Searcher;