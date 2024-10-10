
import {Layout,FixturesScreen, ProfileSScreen,TournamentInfoScreen} from './index'
import { Route,Routes } from "react-router-dom";



const Router = () => {

  return (
    <Routes>
      <Route path="/"element={<Layout><ProfileSScreen/></Layout>}/>
      
      <Route path="/game" element={<Layout><TournamentInfoScreen/></Layout>}/>
      <Route path="/fixtures" element={<Layout><FixturesScreen/></Layout>}/>
    </Routes>
  );
}

export default Router;