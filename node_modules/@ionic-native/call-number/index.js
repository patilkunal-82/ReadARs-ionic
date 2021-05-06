var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CallNumberOriginal = /** @class */ (function (_super) {
    __extends(CallNumberOriginal, _super);
    function CallNumberOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumberOriginal.prototype.callNumber = function (numberToCall, bypassAppChooser) { return cordova(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumberOriginal.prototype.isCallSupported = function () { return cordova(this, "isCallSupported", {}, arguments); };
    CallNumberOriginal.pluginName = "CallNumber";
    CallNumberOriginal.plugin = "call-number";
    CallNumberOriginal.pluginRef = "plugins.CallNumber";
    CallNumberOriginal.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumberOriginal.platforms = ["Android", "iOS"];
    return CallNumberOriginal;
}(IonicNativePlugin));
var CallNumber = new CallNumberOriginal();
export { CallNumber };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbnVtYmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCeEMsOEJBQWlCOzs7O0lBVS9DLCtCQUFVLGFBQUMsWUFBb0IsRUFBRSxnQkFBeUI7SUFTMUQsb0NBQWU7Ozs7OztxQkFuRGpCO0VBZ0NnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIENhbGwgTnVtYmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENhbGwgYSBudW1iZXIgZGlyZWN0bHkgZnJvbSB5b3VyIENvcmRvdmEvSW9uaWMgYXBwbGljYXRpb24uXG4gKiAqKk5PVEUqKjogVGhlIGlPUyBTaW11bGF0b3IgKGFuZCBtYXliZSBBbmRyb2lkIFNpbXVsYXRvcnMpIGRvIG5vdCBwcm92aWRlIGFjY2VzcyB0byB0aGUgcGhvbmUgc3Vic3lzdGVtLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsbE51bWJlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FsbC1udW1iZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGxOdW1iZXI6IENhbGxOdW1iZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNhbGxOdW1iZXIuY2FsbE51bWJlcihcIjE4MDAxMDEwMTAxXCIsIHRydWUpXG4gKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZygnTGF1bmNoZWQgZGlhbGVyIScsIHJlcykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIGxhdW5jaGluZyBkaWFsZXInLCBlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYWxsTnVtYmVyJyxcbiAgcGx1Z2luOiAnY2FsbC1udW1iZXInLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkNhbGxOdW1iZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1JvaGZvc2hvL0NvcmRvdmFDYWxsTnVtYmVyUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxOdW1iZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxscyBhIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbnVtYmVyVG9DYWxsIFRoZSBwaG9uZSBudW1iZXIgdG8gY2FsbCBhcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ5cGFzc0FwcENob29zZXIgU2V0IHRvIHRydWUgdG8gYnlwYXNzIHRoZSBhcHAgY2hvb3NlciBhbmQgZ28gZGlyZWN0bHkgdG8gZGlhbGVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNhbGxOdW1iZXIobnVtYmVyVG9DYWxsOiBzdHJpbmcsIGJ5cGFzc0FwcENob29zZXI6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBjYWxsIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNDYWxsU3VwcG9ydGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=