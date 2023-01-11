import Todos from "./Todos";
import Form from "./Form";
import Nav from "./Nav";
import TodoProvider from "../contexts/TodoProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const TodoList = () => {
  return (
    <BrowserRouter>
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <TodoProvider>
                    <Form />
                    <Nav />
                    <div className="tab-content" id="ex1-content">
                      <div
                        className="tab-pane fade show active"
                      >
                        <ul className="list-group mb-0">
                          <Routes>
                            <Route path="" element={<Todos />} />
                            <Route path="/:segment" element={<Todos />} />
                          </Routes>
                        </ul>
                      </div>
                    </div>
                  </TodoProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default TodoList;
