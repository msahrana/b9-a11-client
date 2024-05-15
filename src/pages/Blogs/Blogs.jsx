import {Helmet} from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="min-h-[calc(100vh-320px)] px-10">
      <Helmet>
        <title>JobNest | Blogs</title>
      </Helmet>
      <div>
        <h1 className="text-4xl font-bold text-center my-10">Our Blogs:</h1>
        {/* 1st question */}
        <div>
          <h1>
            <span className="font-bold">Question: </span>What is an access token
            and refresh token?
          </h1>
          <p>
            <span className="font-bold text-justify">Answer: </span>
            An access token is a credential used to access protected resources,
            typically for a limited period, within an application or service.
            It`s like a digital key that allows a user or application to access
            specific data or functionalities. <br />
            <span className="font-bold">On the other hand,</span> a refresh
            token is a credential used to obtain a new access token when the
            current one expires. It`s a way to extend access without requiring
            the user to log in again. Refresh tokens typically have a longer
            lifespan than access tokens and are securely stored on the client
            side. <br />
            <span className="font-bold">In simpler terms,</span> think of an
            access token as a key card that grants you access to certain rooms
            in a building for a limited time. When that time expires, you can
            use a refresh token to get a new key card without having to go
            through the whole process of getting permission again.
          </p>
        </div>
        {/* 2nd question */}
        <div className="mt-6">
          <h1>
            {" "}
            <span className="font-bold">Question: </span>
            How do they work and where should we store them on the client side?
          </h1>
          <p>
            <span className="font-bold text-justify">Answer: </span>
            Access tokens are short-lived credentials used to access resources.
            They`re typically stored in cookies or browser storage for web apps,
            and in secure storage on mobile devices. <br />
            Refresh tokens are long-lived credentials used to obtain new access
            tokens when old ones expire. They`re securely stored, usually in
            HTTPOnly cookies for web apps and in device keychains for mobile
            apps.
          </p>
        </div>
        {/* 3rd question */}
        <div className="mt-6">
          <h1>
            <span className="font-bold">Question: </span>What is express js?
          </h1>
          <p>
            {" "}
            <span className="font-bold text-justify">Answer: </span>
            Express.js is a web application framework for Node.js, simplifying
            server-side JavaScript development with features like routing,
            middleware, and template engines. It`s widely used for building web
            apps and APIs due to its simplicity and flexibility.
          </p>
        </div>
        {/* 4th question */}
        <div className="mt-6">
          <h1>
            <span className="font-bold">Question: </span>What is Nest JS?
          </h1>
          <p>
            <span className="font-bold text-justify">Answer: </span>
            NestJS is a Node.js framework for building scalable server-side
            applications with TypeScript. It offers a modular structure,
            dependency injection, Express integration, TypeScript support, CLI
            tooling, built-in testing, and a high-performance HTTP server.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
