import React, { useState, useEffect } from 'react';
import { getPosts } from '../../actions/posts';
import PostPageItem from './PostPageItem';
import Pagination from '../../components/Pagination';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then((data) => setPosts(data.reverse()))
            .catch((e) => console.error(e))
    }, [posts])

    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderDataItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToShow = posts.slice(startIndex, endIndex);

        return itemsToShow.map((post) => (
            <PostPageItem key={post._id} post={post} />
        ));
    };

    return (
        <div className='flex justify-center items-center w-[1200px] mx-auto flex-col pt-5'>
            {renderDataItems()}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(posts.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PostsPage;
