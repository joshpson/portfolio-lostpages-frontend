import React from "react";
import Library from "../components/Library";
import Friends from "../components/Friends";
import Search from "../components/Search";

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  setPage = () => {
    const pages = {
      library: <Library books={this.props.user.books} />,
      friends: <Friends friends={this.props.user.friends} />,
      search: <Search searchResult={this.props.searchResults} />
    };
    return pages[this.props.currentPage];
  };

  render() {
    return <div>{this.setPage()}</div>;
  }
}

export default PageContainer;
