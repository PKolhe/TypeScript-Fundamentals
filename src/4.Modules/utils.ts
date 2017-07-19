/// <reference path="typings/toastr.d.ts" />

//Extending Internal modules
namespace App.Utils {

    export interface ILogger {
        write: (msg: string) => void;
    }

    export var LoggerMode = {
        Console: 1,
        Alert: 2,
        Toastr: 3
    }

    export class Logger implements ILogger {
        private writer: any;

        constructor (public mode: number = LoggerMode.Console) {
            switch (this.mode) {
                case LoggerMode.Console:
                    this.writer = (msg: string) => console.log(msg);
                    break;
                case LoggerMode.Alert:
                    this.writer = (msg: string) => alert(msg);
                    break;
                case LoggerMode.Toastr:
                    this.writer = (msg: string) => toastr.info(msg);
                    break;
            }
        }

        write(msg) {
            this.writer(msg);
        };

    }
}

import Utils = App.Utils;