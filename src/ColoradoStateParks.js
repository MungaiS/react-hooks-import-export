import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
import { trees, wildlife} from './parks/RockyMountain';

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

wildlife();
// > "Elk, Bighorn Sheep, Moose"

console.log(trees)
