import { PageWrapper } from "App.styled";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <PageWrapper>
        <div>Home</div>
      </PageWrapper>
    </>
  );
};

export default Home;
