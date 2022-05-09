import React from "react";
import { useSelector } from "react-redux";
import {
  Tabs,
  Tab,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import "./index.scss";

const index = () => {
  const toggle = useSelector((state) => state.topBar.toggle);
  return (
    <div className="content">
      <div className="align-items-center container-fluid d-flex index justify-content-center">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center mt-3">
            <Tabs
              defaultActiveKey="search"
              className="mb-3 justify-content-between col-12 col-md-8"
            >
              <Tab eventKey="search" title="Search">
                <div className="row">
                  <div className="col-12 tab-content">
                    <Form>
                      <InputGroup>
                        <FormControl
                          placeholder="Search for everything..."
                          aria-label="Search for everything..."
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                          <FaSearch className="mb-1" />
                        </Button>
                      </InputGroup>
                      <div
                        key={`inline-checkbox`}
                        className="my-3 d-flex justify-content-center"
                      >
                        <div className="">
                          <Form.Check
                            inline
                            label="Articles"
                            name="articles"
                            type="checkbox"
                            id="articles"
                          />
                          <Form.Check
                            inline
                            label="Package"
                            name="package"
                            type="checkbox"
                            id="package"
                          />
                          <Form.Check
                            inline
                            label="Rules"
                            name="rules"
                            type="checkbox"
                            id="rules"
                          />
                        </div>
                        <div className="vertical-divider"></div>
                        <div>
                          <Form.Check
                            inline
                            label="Carriers"
                            name="carriers"
                            type="checkbox"
                            id="carriers"
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="library" title="Library">
                <div className="row">
                  <div className="col-12 tab-content">
                    <Form>
                      <InputGroup>
                        <FormControl
                          placeholder="Search Library..."
                          aria-label="Search Library..."
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                          <FaSearch className="mb-1" />
                        </Button>
                      </InputGroup>
                      <div
                        key={`inline-checkbox`}
                        className="my-3 d-flex justify-content-center"
                      >
                        <div className="">
                          <Form.Check
                            inline
                            label="Articles"
                            name="articles"
                            type="checkbox"
                            id="articles"
                          />
                          <Form.Check
                            inline
                            label="Package"
                            name="package"
                            type="checkbox"
                            id="package"
                          />
                          <Form.Check
                            inline
                            label="Rules"
                            name="rules"
                            type="checkbox"
                            id="rules"
                          />
                        </div>
                        <div className="vertical-divider"></div>
                        <div>
                          <Form.Check
                            inline
                            label="Carriers"
                            name="carriers"
                            type="checkbox"
                            id="carriers"
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="index" title="Index">
                <div className="row">
                  <div className="col-12 tab-content">
                    <Form>
                      <InputGroup>
                        <FormControl
                          placeholder="Search Index..."
                          aria-label="Search Index..."
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                          <FaSearch className="mb-1" />
                        </Button>
                      </InputGroup>
                      <div
                        key={`inline-checkbox`}
                        className="my-3 d-flex justify-content-center"
                      >
                        <div className="">
                          <Form.Check
                            inline
                            label="Articles"
                            name="articles"
                            type="checkbox"
                            id="articles"
                          />
                          <Form.Check
                            inline
                            label="Package"
                            name="package"
                            type="checkbox"
                            id="package"
                          />
                          <Form.Check
                            inline
                            label="Rules"
                            name="rules"
                            type="checkbox"
                            id="rules"
                          />
                        </div>
                        <div className="vertical-divider"></div>
                        <div>
                          <Form.Check
                            inline
                            label="Carriers"
                            name="carriers"
                            type="checkbox"
                            id="carriers"
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
