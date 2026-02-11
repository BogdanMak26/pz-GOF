import {UI} from "./UI";
export class Android extends UI {


  public render() {
    const data = this.backend.getData();
    console.log("AndroidUI: Rendering data from the backend ->", data);
  }
}
