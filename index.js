"use strict";

const site = {
  title: "Green site",
  headers: ["Title 1", "About us", "Portfolio"],
  showHeaders() {
    // console.log(this);
    this.headers.forEach((header)=> {
      console.log(header, '|' ,this.title);
      const test = ()=>{
        console.log(this);
      }
      test();
    });
  }
};

site.showHeaders();
