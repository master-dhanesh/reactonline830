import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import LazyLoad from "react-lazyload";

import "./App.css";
const App = () => {
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(true);

    const getImages = async (count = 1) => {
        try {
            const { data } = await axios.get(
                `https://picsum.photos/v2/list?page=${count}&limit=13`
            );
            setTimeout(() => {
                setImages(data);
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getImages();
    }, []);

    const handlePageClick = (e) => {
        setLoading(true);
        setImages(null);
        getImages(e.selected + 1);
    };

    return (
        <div>
            <button onClick={getImages}>Get Images</button>
            {loading && <h1>Loading...</h1>}
            <div className="d-flex flex-wrap container">
                {images &&
                    images.map((image, index) => (
                        <div key={index} className="me-3 mb-3">
                            <LazyLoad height="10vmax">
                                <img
                                    style={{
                                        height: "10vmax",
                                        width: "15vmax",
                                    }}
                                    src={image.download_url}
                                    alt={image.download_url}
                                />
                            </LazyLoad>
                            <p>{image.author}</p>
                        </div>
                    ))}
            </div>
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel="<"
            />
        </div>
    );
};

export default App;
