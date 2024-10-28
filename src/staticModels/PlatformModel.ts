import {MobileDeviceData} from "../data/MobileDeviceData";

export class PlatformModel {
    public static mobileDeviceData: MobileDeviceData;
    public static isMac: boolean;
    public static isSafari: boolean;
    public static isFirefox: boolean;
    public static enhanceAnnotationExperience(): void {
        if (PlatformModel.mobileDeviceData.manufacturer && PlatformModel.mobileDeviceData.os) {
            document.body.classList.add('enhanced-annotation-experience');
        }
        if (PlatformModel.mobileDeviceData.stylusSupport) {
            document.body.classList.add('stylus-supported');
        }
        if (PlatformModel.mobileDeviceData.touchSupport) {
            document.body.classList.add('touch-supported');
        }
    }
}
