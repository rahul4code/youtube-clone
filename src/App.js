import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import WatchVideo from "./component/WatchVideo";
import VideoContainer from "./component/VideoContainer";

function App() {
  const appRouter= createBrowserRouter([
    {
      path:'/',
      element:<Body />,
      children:[
        {
          path:'/',
          element:<VideoContainer/>
        },
        {
          path:'/watch',
          element:<WatchVideo />
        }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
}



export default App;
