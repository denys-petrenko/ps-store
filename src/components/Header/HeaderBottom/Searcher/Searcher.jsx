import styles from "./Searcher.module.scss";
import searchBtn from "../../../../assets/header/search.svg";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../../store/slices/productsSlice";
import { getCategories } from "../../../../api/categoriesApi";
import SearchResultCard from "./SearchResultCard/SearchResultCard";


const Searcher = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const query = search.trim().toLowerCase();
    const { items } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const searchRef = useRef(null);

    useEffect(() => {
        const handleCloseSearch = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearch("");
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


    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Failed to load categories:", error);
            }
        }

        loadCategories();
    }, []);


    const parentCategoryMap = useMemo(() => {
        const map = new Map();

        for (const category of categories) {
            if (category.parentId) {
                map.set(category.slug, category.parentId);
            }
        }

        return map;
    }, [categories]);



    return (
        <div
            className={styles.searcher}
            ref={searchRef}
        >
            <form
                onSubmit={(e) => e.preventDefault()}
                className={styles.searchForm}
            >
                <input
                    type="text"
                    name="search"
                    placeholder={t("header.placeholder")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.searchInput}
                />
                <button className={styles.searchBtn}>
                    <img src={searchBtn} alt="Search" className={styles.searchLogo} />
                </button>
            </form>


            <div className={`${styles.result} ${query ? styles.active : ""}`}>
                {query && !filteredItems.length
                    ? "No result"
                    : filteredItems.map(item => (
                        <SearchResultCard
                            key={item.id}
                            item={item}
                            parentCategoryMap={parentCategoryMap}
                            onClick={() => setSearch("")}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Searcher;