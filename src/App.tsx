import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from "./components/Post/Post";
import PostsList from "./components/PostsList/PostsList";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <PostsList />
      </Route>
      <Route path="/posts/:id">
        <Post />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
