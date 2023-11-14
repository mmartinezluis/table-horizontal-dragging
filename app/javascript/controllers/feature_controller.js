import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="feature"
export default class extends Controller {
  connect() {
    console.log("Feature controller has been connected");
  }
}
