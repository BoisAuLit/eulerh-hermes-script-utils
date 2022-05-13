import { Component } from "@angular/core";
import * as _ from "lodash";
import { Parser } from "json2csv";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  inputStr = "";
  outputStr: string = "";

  transform() {
    const inputJson = JSON.parse(this.inputStr);
    const headersArray = inputJson[0];
    const permissions = inputJson[1].map((dataArray: any[]) =>
      _.zipObject(headersArray, dataArray)
    );
    const json2csvParser = new Parser({ quote: "" });
    const csvStr = json2csvParser.parse(permissions);
    this.outputStr = csvStr
  }
}
