import { Component } from 'react';

/** article에 대한 Component */
class Content extends Component {
    render() {
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
}

export default Content;