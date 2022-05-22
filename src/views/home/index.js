import nav from "../../components/nav";
import footer from "../../components/footer";

let Home = {
  render: async () => {
    let view = `
    ${nav}
      <div>
      <h1>Home Page</h1>
      </div>
    ${footer}`;

    return view;
  },
  after_render: async () => {},
};

export default Home;
