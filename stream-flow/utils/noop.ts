import { Noop } from "../models/types";

const noop: Noop = () => undefined;

noop.noop = true;

export default noop;
