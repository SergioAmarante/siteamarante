import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";

import * as Pages from "./pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Pages.Home} />
                    <Route exact path="/queerarte" component={Pages.Queer} />
                    <Route exact path="/fullstack" component={Pages.Fullstack} />
                    <Route exact path="/contato" component={Pages.Contato} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;
