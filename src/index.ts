import { App } from './App';

const index = () => {
  try {
    const app = new App();
    app.run();
  } catch (error) {
    console.error(error);
  }
};

index();
