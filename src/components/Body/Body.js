import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div id="BodyRoot">
        <p id="paragraph-head">People-centered innovation</p>
        <p id="paragraph-body">Tinder helps companies define meaningful and great experiences for their customers. By identifying what users need, want, and haven't yet dreamt of, we collaboratively build a bright future with our clients. Our work is grounded in solid user insights research and functions within the context of our clients businesses and brands to achieve meaningful objectives.</p>
        <hr/>
        <p id="activities-head">We engage in a range of activities to fuel product & experience innovation and drive business growth.</p>
        <div className="row">
          <div className="activites-list-div col-md-4">
            <ul className="activities-list">
              <li>Qualitative Research</li>
              <li>Rapid Ethnography</li>
              <li>Usability Testing</li>
              <li>Secondary Research</li>
              <li>Team Immersion Expeditions</li>
              <li>Retail Research</li>
              <li>Trend Analysis</li>
              <li>Evaluative Concept Testing</li>
            </ul>
          </div>
          <div className="activites-list-div col-md-4">
            <ul className="activities-list">
              <li>Opportunity Framing</li>
              <li>Scenario Planning</li>
              <li>Product and Experience Innovation Stragegy</li>
              <li>Design Language Creation</li>
              <li>User Profiles</li>
              <li>Customer Journey Mapping</li>
            </ul>
          </div>
          <div className="activites-list-div col-md-4">
            <ul className="activities-list">
              <li>Concept Exploration</li>
              <li>Scenario Development</li>
              <li>Brand Stewardship Toolkits</li>
              <li>Ideation Workshops</li>
              <li>Design Brief Creation</li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}
export default Body;
