import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>Template Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, dolorem sit optio consequatur inventore et animi
            natus. Pariatur dolore accusamus, aliquam praesentium temporibus
            fuga voluptas quidem impedit, corporis beatae exercitationem.
          </p>
          <hr className="border-2" />
        </div>
        <div className="col">
          <h2>Template Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, dolorem sit optio consequatur inventore et animi
            natus. Pariatur dolore accusamus, aliquam praesentium temporibus
            fuga voluptas quidem impedit, corporis beatae exercitationem.
          </p>
          <hr className="border-2" />
        </div>
        <div className="col">
          <h2>Template Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, dolorem sit optio consequatur inventore et animi
            natus. Pariatur dolore accusamus, aliquam praesentium temporibus
            fuga voluptas quidem impedit, corporis beatae exercitationem.
          </p>
          <hr className="border-2" />
        </div>
      </div>
    );
  }
}
