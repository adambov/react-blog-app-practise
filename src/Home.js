import { useState, useEffect } from "react";
import Bloglist from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data, isPending, error} = useFetch('http://localhost:3500/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           {data && <Bloglist blogs={data} title="All blogs!" />}
        </div>
    );
}

export default Home;