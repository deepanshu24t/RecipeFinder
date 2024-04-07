

import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import {Link} from 'react-router-dom'
const Home = () => {

    return (
        <Header title="Our Recipes" bgclass="bg-image">
         <Link to ="/recipes"> <Button content="SEARCH RECIPES" color="primary" size="big"/></Link>  
        </Header>
    )
}

export default Home;
