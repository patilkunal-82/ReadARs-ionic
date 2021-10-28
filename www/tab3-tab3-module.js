(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js ***!
  \***************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = /** @class */ (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        var isInput = isElement(fileOrInput);
        /** @type {?} */
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        var method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    FileLikeObject.prototype._createFromFakePath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FileLikeObject.prototype._createFromObject = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileItem = /** @class */ (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    FileItem.prototype.upload = /**
     * @return {?}
     */
    function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.uploader.cancelItem(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.uploader.removeFromQueue(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.onBeforeUpload = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype.onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return { form: form };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype.onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileItem.prototype._onBeforeUpload = /**
     * @return {?}
     */
    function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype._onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        this.onBuildForm(form);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype._onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype._prepareToUploading = /**
     * @return {?}
     */
    function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileType = /** @class */ (function () {
    function FileType() {
    }
    /**
     * @param {?} file
     * @return {?}
     */
    FileType.getMimeClass = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    FileType.fileTypeDetection = /**
     * @param {?} inputFilename
     * @return {?}
     */
    function (inputFilename) {
        /** @type {?} */
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    /*  MS office  */
    FileType.mime_doc = [
        'application/msword',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'application/vnd.ms-word.document.macroEnabled.12',
        'application/vnd.ms-word.template.macroEnabled.12'
    ];
    FileType.mime_xsl = [
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'application/vnd.ms-excel.sheet.macroEnabled.12',
        'application/vnd.ms-excel.template.macroEnabled.12',
        'application/vnd.ms-excel.addin.macroEnabled.12',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ];
    FileType.mime_ppt = [
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml.template',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ];
    /* PSD */
    FileType.mime_psd = [
        'image/photoshop',
        'image/x-photoshop',
        'image/psd',
        'application/photoshop',
        'application/psd',
        'zz-application/zz-winassoc-psd'
    ];
    /* Compressed files */
    FileType.mime_compress = [
        'application/x-gtar',
        'application/x-gcompress',
        'application/compress',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/octet-stream',
        'application/x-zip-compressed',
        'application/zip-compressed',
        'application/x-7z-compressed',
        'application/gzip',
        'application/x-bzip2'
    ];
    return FileType;
}());
if (false) {}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
var FileUploader = /** @class */ (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item._file; }),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    FileUploader.prototype.addToQueue = /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    function (files, options, filters) {
        var e_1, _a;
        var _this = this;
        /** @type {?} */
        var list = [];
        try {
            for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                list.push(file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        var count = this.queue.length;
        /** @type {?} */
        var addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        function (some) {
            if (!options) {
                options = _this.options;
            }
            /** @type {?} */
            var temp = new FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.removeFromQueue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.clearQueue = /**
     * @return {?}
     */
    function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.uploadItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.cancelItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.uploadAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploading; }));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._prepareToUploading(); }));
        items[0].upload();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.cancelAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.cancel(); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFile = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isFile(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFileLikeObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof FileLikeObject;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.getIndexOfItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getNotUploadedItems = /**
     * @return {?}
     */
    function () {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploaded; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getReadyItems = /**
     * @return {?}
     */
    function () {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.isReady && !item.isUploading); }))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        function (item1, item2) { return item1.index - item2.index; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.destroy = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} fileItems
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingAll = /**
     * @param {?} fileItems
     * @return {?}
     */
    function (fileItems) {
        return { fileItems: fileItems };
    };
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype.onBuildItemForm = /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingFile = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.onWhenAddingFileFailed = /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onBeforeUploadItem = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressItem = /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressAll = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onSuccessItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCancelItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.onCompleteAll = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._mimeTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileSizeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    FileUploader.prototype._headersGetter = /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    function (parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._xhrTransport = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_2, _a, e_3, _b;
        var _this = this;
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            var appendFile = (/**
             * @return {?}
             */
            function () { return sendable.append(item.alias, item._file, item.file.name); });
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            /** @type {?} */
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            var method = '_on' + gist + 'Item';
            ((/** @type {?} */ (_this)))[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            try {
                for (var _c = __values(this.options.headers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var header = _d.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (item.headers.length) {
            try {
                for (var _e = __values(item.headers), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var header = _f.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return xhr.send(JSON.stringify(result)); }));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    FileUploader.prototype._getTotalProgress = /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        var notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        var ratio = 100 / this.queue.length;
        /** @type {?} */
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    FileUploader.prototype._getFilters = /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) { return names_1.indexOf(filter.name) !== -1; }));
        }
        return this.options.filters;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._render = /**
     * @protected
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._queueLimitFilter = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._isValidFile = /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        }));
    };
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    FileUploader.prototype._isSuccessCode = /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._transformResponse = /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    function (response, headers) {
        return response;
    };
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._parseHeaders = /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        /** @type {?} */
        var parsed = {};
        /** @type {?} */
        var key;
        /** @type {?} */
        var val;
        /** @type {?} */
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._onWhenAddingFileFailed = /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingFile = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onAfterAddingFile(item);
    };
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingAll = /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.onAfterAddingAll(items);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onBeforeUploadItem = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype._onBuildItemForm = /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype._onProgressItem = /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    function (item, progress) {
        /** @type {?} */
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onSuccessItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCancelItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileSelectDirective = /** @class */ (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.isEmptyAfterSelection = /**
     * @return {?}
     */
    function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.onChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var files = this.element.nativeElement.files;
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    FileSelectDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileSelectDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
    };
    return FileSelectDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileDropDirective = /** @class */ (function () {
    function FileDropDirective(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._getTransfer = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._preventAndStop = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    FileDropDirective.prototype._haveFiles = /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    FileDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
    ];
    /** @nocollapse */
    FileDropDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileDropDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
    };
    return FileDropDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [FileDropDirective, FileSelectDirective],
                    exports: [FileDropDirective, FileSelectDirective]
                },] }
    ];
    return FileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "./src/app/addbook/addbook.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addbook/addbook.module.ts ***!
  \*******************************************/
/*! exports provided: AddbookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookPageModule", function() { return AddbookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbook_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbook.page */ "./src/app/addbook/addbook.page.ts");






var AddbookPageModule = /** @class */ (function () {
    function AddbookPageModule() {
    }
    AddbookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [_addbook_page__WEBPACK_IMPORTED_MODULE_5__["AddbookPage"]],
            declarations: [_addbook_page__WEBPACK_IMPORTED_MODULE_5__["AddbookPage"]]
        })
    ], AddbookPageModule);
    return AddbookPageModule;
}());



/***/ }),

/***/ "./src/app/addbook/addbook.page.html":
/*!*******************************************!*\
  !*** ./src/app/addbook/addbook.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <!--<ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    Add 1 or more books..\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon style=\"color: white; background: #145A32; \" name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>-->\n\n   \n      \n    \n      <ion-title size=\"large\" text-center\n             style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n             color: #FDFEFE  ; font-weight: bolder; font-size: 15px; text-align: start;\">\n            Add 1 or more books..\n       </ion-title>\n   \n      \n       <ion-buttons slot=\"end\">\n        <ion-icon style=\"color: whitesmoke;\" src=\"../assets/icon/close-outline.svg\" \n        size=\"medium\" (click)=\"closeModal()\"></ion-icon>\n      </ion-buttons>\n  \n    \n   \n\n  </ion-toolbar>\n\n  \n</ion-header> \n\n<ion-content>\n\n\n    <form [formGroup]=\"addBookFormGroup\" #fform=\"ngForm\">\n\n      <ion-item>\n        <ion-label color=\"medium\">Book Name:</ion-label>\n        <ion-input formControlName=\"bookname\" type=\"text\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"formErrors.bookname\">\n        <ng-container >\n          <div style=\"color:darkgrey;\">\n            {{formErrors.bookname}}\n          </div>\n        </ng-container>\n      </div>\n\n    <!--<ion-item>\n        <ion-label color=\"medium\">Book Cover Image:</ion-label>\n        <ion-input type=\"file\" (change)=\"onFileChanged($event)\" required></ion-input>\n        <ion-thumbnail>\n          <ion-img [src]=\"imgURL\" height=\"100\" *ngIf=\"imgURL\"></ion-img>\n        </ion-thumbnail>\n    </ion-item> -->\n\n     <ion-item>\n          <ion-label color=\"medium\">Book Cover \n            <ion-icon *ngIf=\"!capturedImage\" src=\"../assets/icon/camera-outline.svg\" (click)=\"selectImageSource()\"></ion-icon>:\n          </ion-label>\n    \n          <ion-thumbnail>\n            <ion-img formControlName=\"bookcoverimage\" [src]=\"capturedImage\" *ngIf=\"capturedImage\" height=\"100\" required></ion-img>\n          </ion-thumbnail>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color=\"medium\">Book Genre:</ion-label>\n        <ion-select formControlName=\"bookgenre\" required>\n          <ion-select-option *ngFor=\"let bgenre of bookgenre\" [value]=\"bgenre\">\n                  {{bgenre}}\n        </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div *ngIf=\"formErrors.bookgenre\">\n        <ng-container >\n          <div style=\"color:darkgrey;\">\n            {{formErrors.bookgenre}}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label color=\"medium\">Book Language:</ion-label>\n        <ion-select formControlName=\"booklanguage\" required>\n          <ion-select-option *ngFor=\"let blanguage of booklanguage\" [value]=\"blanguage\">\n                  {{blanguage}}\n        </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div *ngIf=\"formErrors.booklanguage\">\n        <ng-container >\n          <div style=\"color:darkgrey;\">\n            {{formErrors.booklanguage}}\n          </div>\n        </ng-container>\n      </div>\n\n     <ion-item>\n        <ion-label color=\"medium\">Book's Author:</ion-label>\n        <ion-input formControlName=\"bookauthor\" type=\"text\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"formErrors.bookauthor\">\n        <ng-container >\n          <div style=\"color:darkgrey;\">\n            {{formErrors.bookauthor}}\n          </div>\n        </ng-container>\n      </div>\n\n      <!--<ion-item>\n        <ion-label color=\"medium\">Book Description:</ion-label>\n        <ion-input formControlName=\"bookdescription\" type=\"text\"></ion-input>\n      </ion-item> -->\n\n      <ion-item>\n          <ion-text color=\"medium\">Your Rating for the book:</ion-text>\n          <ion-range min=\"1\" max=\"5\" tickInterval=\"1\" value=\"5\" pin=\"true\" snaps name=\"rating\"\n          formControlName=\"bookrating\" required></ion-range>\n      </ion-item>\n      <div *ngIf=\"formErrors.bookrating\">\n        <ng-container >\n          <div style=\"color:darkgrey;\">\n            {{formErrors.bookrating}}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label color=\"medium\">Your address:</ion-label>\n        <ion-input formControlName=\"bookowneraddress\" type=\"text\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"formErrors.bookowneraddress\">\n        <ng-container >\n          <div style=\"color:darkgrey;\">\n            {{formErrors.bookowneraddress}}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label color=\"medium\">Your contact number:</ion-label>\n        <ion-input formControlName=\"bookownertelnum\" type=\"text\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"formErrors.bookownertelnum\">\n        <ng-container >\n          <div style=\"color:darkgrey;\">\n            {{formErrors.bookownertelnum}}\n          </div>\n        </ng-container>\n      </div>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"onSubmit()\" shape=\"round\"  style=\"color:#1B4F72\" \n          [disabled]=\"addBookFormGroup.invalid\" margin-top expand=\"full\"  class=\"center\">Submit</ion-button>\n        </ion-col>\n        <ion-col>\n          <!--<ion-button (click)=\"closeModal()\" shape=\"round\" style=\"color: grey\" \n          margin-top expand=\"full\">Cancel</ion-button>-->\n        </ion-col>\n      </ion-row>\n    </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addbook/addbook.page.scss":
/*!*******************************************!*\
  !*** ./src/app/addbook/addbook.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-img {\n  width: 50px;\n  height: 50px;\n  border: gray solid 1px;\n  margin: 5px auto; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\nion-button {\n  --background: #F4F6F7 ; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9hZGRib29rL2FkZGJvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBSUssV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJakI7RUFDSSxzQkFBYSxFQUFBOztBQUdmO0VBRUUscUJBQWEsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkYm9vay9hZGRib29rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmRpc3BsYXljYXJkIHtcbiAgICAvLyB3aWR0aDogMzB2dztcbiAgICAgLy9oZWlnaHQ6MzB2aDtcbiAgICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgICBtYXJnaW46IDVweDtcbiAgICAgcGFkZGluZzogNXB4O1xuICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICB9XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0Y0RjZGNyA7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICMxQjRGNzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xufVxuXG4uY2VudGVye1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/addbook/addbook.page.ts":
/*!*****************************************!*\
  !*** ./src/app/addbook/addbook.page.ts ***!
  \*****************************************/
/*! exports provided: AddbookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookPage", function() { return AddbookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");














//import { Storage } from '@ionic/storage';
//const STORAGE_KEY = 'book_images';
var AddbookPage = /** @class */ (function () {
    function AddbookPage(_modalController, _alertController, booksService, fb, _camera, _webview, file, plt, filePath, authService, 
    //private storage: Storage,
    webview, 
    //private ref: ChangeDetectorRef,
    toastCtrl) {
        this._modalController = _modalController;
        this._alertController = _alertController;
        this.booksService = booksService;
        this.fb = fb;
        this._camera = _camera;
        this._webview = _webview;
        this.file = file;
        this.plt = plt;
        this.filePath = filePath;
        this.authService = authService;
        this.webview = webview;
        this.toastCtrl = toastCtrl;
        this.dataReader = new FileReader();
        this.images = [];
        this.booklanguage = _shared_book__WEBPACK_IMPORTED_MODULE_4__["BookLanguage"];
        this.bookgenre = _shared_book__WEBPACK_IMPORTED_MODULE_4__["BookGenre"];
        this.submitted = null;
        this.showForm = true;
        this.panelOpenState = false;
        this.username = undefined;
        this.formErrors = {
            'bookname': '',
            'booklanguage': '',
            'bookgenre': '',
            'bookowneraddress': '',
            'bookownertelnum': '',
            'bookrating': '',
            'bookauthor': ''
        };
        this.validationMessages = {
            'bookname': {
                'required': 'Book Name is required.',
                'minlength': 'Book Name must be at least 1 character long.',
                'maxlength': 'BookName cannot be more than 40 characters long.'
            },
            'booklanguage': {
                'required': 'Book Language is required.',
                'minlength': 'Book Language must be at least 2 characters long.',
                'maxlength': 'Book Language cannot be more than 25 characters long.'
            },
            'bookgenre': {
                'required': 'Book Language is required.',
                'minlength': 'Book Language must be at least 2 characters long.',
                'maxlength': 'Book Language cannot be more than 25 characters long.'
            },
            'bookowneraddress': {
                'required': 'Address is required.',
            },
            'bookownertelnum': {
                'required': 'Contact number is required.',
                'pattern': 'Contact number must contain only numbers.'
            },
            'booauthor': {
                'required': 'Author Name is required.',
                'minlength': 'Author Name must be at least 1 character long.',
                'maxlength': 'Author Name cannot be more than 40 characters long.'
            }
        };
    }
    AddbookPage.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(function (name) { console.log(name); _this.username = name; });
        this.booksService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
        }, function (errmess) { return _this.errMess = errmess; });
        var button = document.querySelector('ion-button');
        button.addEventListener('click', this.onSubmit);
    };
    AddbookPage.prototype.onFileChanged = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        console.log("Event", event);
        console.log("Event target files", event.target.files);
        console.log("selected file contnets", this.selectedFile);
        console.log("selected file name", this.selectedFile.name);
        // Below part is used to display the selected image
        //let reader = new FileReader();
        //reader.readAsDataURL(event.target.files[0]);
        //reader.onload = (event2) => {
        //this.imgURL = reader.result;
        //this.bookCoverImage = reader.result;
        //};
        this.uploadData = new FormData();
        this.uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
        this.dataReader.readAsArrayBuffer(event.target.files[0]);
    };
    AddbookPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
                            position: 'middle'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddbookPage.prototype.createForm = function () {
        var _this = this;
        this.addBookFormGroup = this.fb.group({
            bookname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]],
            booklanguage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]],
            bookgenre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]],
            bookowneraddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bookownertelnum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            bookrating: '5',
            bookauthor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]],
            bookcoverimage: ''
        });
        this.addBookFormGroup.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        //this.onValueChanged(); // (re)set validation messages now
    };
    AddbookPage.prototype.onValueChanged = function (data) {
        if (!this.addBookFormGroup) {
            return;
        }
        var form = this.addBookFormGroup;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    AddbookPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: "Add Book",
                            message: "Select your option..",
                            buttons: [
                                {
                                    text: "Add this",
                                    handler: function () {
                                        _this.addbook = _this.addBookFormGroup.value;
                                        _this.addbook.bookcurrentstatus = 'available';
                                        console.log(_this.addbook);
                                        _this.showForm = false;
                                        _this.booksService.addBook(_this.addbook)
                                            .subscribe(function (addbook) {
                                            console.log("response received-BOOK ADDED");
                                            _this.submitted = addbook;
                                            _this.booksService.uploadImage(_this.submitted._id, _this.uploadData)
                                                .subscribe(function (res) {
                                                console.log(res);
                                                _this.presentToast("Book Added Successfully");
                                                _this.ngOnInit();
                                                _this.receivedImageData = res;
                                                _this.base64Data = _this.receivedImageData.pic;
                                                _this.convertedImage = 'data:image/jpeg;base64,' + _this.base64Data;
                                            });
                                            _this.addbook = null;
                                            setTimeout(function () { _this.submitted = null; _this.showForm = true; }, 5000);
                                        }, function (error) { return console.log(error.status, error.message); });
                                        _this.addBookFormGroup.reset({
                                            bookname: '',
                                            booklanguage: '',
                                            bookgenre: '',
                                            bookowneraddress: '',
                                            bookownertelnum: '',
                                            bookrating: '5',
                                            bookcoverimage: ''
                                        });
                                        _this.capturedImage = undefined;
                                        _this.addbookDetailsFormDirective.resetForm();
                                        //this.ngOnInit();
                                        _this.closeModal();
                                    }
                                },
                                {
                                    text: "Add this & 1 more",
                                    handler: function () {
                                        _this.addbook = _this.addBookFormGroup.value;
                                        _this.addbook.bookcurrentstatus = 'available';
                                        //  this.feedback = this.bookDetailsForm.value;
                                        console.log(_this.addbook);
                                        _this.showForm = false;
                                        _this.booksService.addBook(_this.addbook)
                                            .subscribe(function (addbook) {
                                            console.log("response received");
                                            _this.submitted = addbook;
                                            console.log(_this.submitted);
                                            _this.booksService.uploadImage(_this.submitted._id, _this.uploadData)
                                                .subscribe(function (res) {
                                                console.log(res);
                                                _this.presentToast("Book Added Successfully");
                                                _this.ngOnInit();
                                                _this.receivedImageData = res;
                                                _this.base64Data = _this.receivedImageData.pic;
                                                _this.convertedImage = 'data:image/jpeg;base64,' + _this.base64Data;
                                            });
                                            _this.addbook = null;
                                            setTimeout(function () { _this.submitted = null; _this.showForm = true; }, 5000);
                                        }, function (error) { return console.log(error.status, error.message); });
                                        _this.addBookFormGroup.reset({
                                            bookname: '',
                                            booklanguage: '',
                                            bookgenre: '',
                                            bookowneraddress: '',
                                            //bookdescription:'',
                                            bookownertelnum: '',
                                            bookrating: '5',
                                            bookcoverimage: ''
                                        });
                                        _this.capturedImage = undefined;
                                        _this.addbookDetailsFormDirective.resetForm();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddbookPage.prototype.selectImageSource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, galleryOptions, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.PNG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 180,
                            targetWidth: 100,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.CAMERA
                        };
                        galleryOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.PNG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 180,
                            targetWidth: 100,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
                        };
                        return [4 /*yield*/, this._alertController.create({
                                header: "Select Source",
                                message: "Pick a source for your image",
                                buttons: [
                                    {
                                        text: "Camera",
                                        handler: function () {
                                            _this._camera.getPicture(cameraOptions)
                                                .then(function (imageURI) {
                                                // display captured image
                                                console.log(imageURI);
                                                var imageName = imageURI.substring(imageURI.lastIndexOf('/') + 1);
                                                var imagePath = imageURI.substring(0, imageURI.lastIndexOf('/') + 1);
                                                console.log("image name", imageName);
                                                console.log("image path", imagePath);
                                                console.log("before read as data url");
                                                _this.file.readAsDataURL(imagePath, imageName).then(function (res) { return _this.capturedImage = res; });
                                                console.log("after read as data url");
                                                // resolve URI, get blob & file and POST
                                                _this.file.resolveLocalFilesystemUrl(imageURI)
                                                    .then(function (entry) {
                                                    console.log("inside resolve local file system url");
                                                    entry.file(function (file) { return _this.readFile(file); });
                                                })
                                                    .catch(function (err) {
                                                    console.log("error reading file");
                                                });
                                            }, function (err) {
                                                // Handle error
                                                console.log(err);
                                            });
                                        }
                                    },
                                    {
                                        text: "Gallery",
                                        handler: function () {
                                            _this._camera.getPicture(galleryOptions)
                                                .then(function (imageURI) {
                                                // display captured image
                                                var imageName = imageURI.substring(imageURI.lastIndexOf('/') + 1);
                                                var imagePath = imageURI.substring(0, imageURI.lastIndexOf('/') + 1);
                                                _this.file.readAsDataURL(imagePath, imageName).then(function (res) { return _this.capturedImage = res; });
                                                //  this.copyFileToLocalDir(imagePath, imageName, this.createFileName());
                                                // resolve URI, get blob & file and POST
                                                _this.file.resolveLocalFilesystemUrl(imageURI)
                                                    .then(function (entry) {
                                                    console.log("inside resolve local file system url");
                                                    entry.file(function (file) { return _this.readFile(file); });
                                                })
                                                    .catch(function (err) {
                                                    console.log("error reading file");
                                                });
                                            }, function (err) {
                                                // Handle error
                                                console.log(err);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
      }
  
      copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImages(newFileName);
        }, error => {
            console.log('Error while storing file.');
        });
    }
  
    updateStoredImages(name) {
      this.storage.get(STORAGE_KEY).then(images => {
          let arr = JSON.parse(images);
          if (!arr) {
              let newImages = [name];
              this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
          } else {
              arr.push(name);
              this.storage.set(STORAGE_KEY, JSON.stringify(arr));
          }
   
          let filePath = this.file.dataDirectory + name;
          let resPath = this.pathForImage(filePath);
   
          let newEntry = {
              name: name,
              path: resPath,
              filePath: filePath
          };
   
          this.images = [newEntry, ...this.images];
         
          this.ref.detectChanges(); // trigger change detection cycle
      });
  }
  
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }*/
    AddbookPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        console.log("file type", file.type);
        console.log("file type", file.name);
        reader.onloadend = function () {
            _this.uploadData = new FormData();
            if (reader.result) {
                var imgBlob = new Blob([reader.result], { type: file.type });
                _this.uploadData.append('imageFile', imgBlob, file.name);
            }
        };
        reader.readAsArrayBuffer(file);
    };
    AddbookPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this._modalController.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddbookPage.prototype, "addbookDetailsFormDirective", void 0);
    AddbookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbook',
            template: __webpack_require__(/*! ./addbook.page.html */ "./src/app/addbook/addbook.page.html"),
            styles: [__webpack_require__(/*! ./addbook.page.scss */ "./src/app/addbook/addbook.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AddbookPage);
    return AddbookPage;
}());



/***/ }),

/***/ "./src/app/arbook/arbook.module.ts":
/*!*****************************************!*\
  !*** ./src/app/arbook/arbook.module.ts ***!
  \*****************************************/
/*! exports provided: ArbookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbookPageModule", function() { return ArbookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _arbook_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arbook.page */ "./src/app/arbook/arbook.page.ts");
/* harmony import */ var _components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/multi-file-upload/multi-file-upload.component */ "./src/app/components/multi-file-upload/multi-file-upload.component.ts");
/* harmony import */ var _components_multi_file_content_upload_multi_file_content_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/multi-file-content-upload/multi-file-content-upload.component */ "./src/app/components/multi-file-content-upload/multi-file-content-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");










var ArbookPageModule = /** @class */ (function () {
    function ArbookPageModule() {
    }
    ArbookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_9__["IonicImageLoaderModule"]
            ],
            entryComponents: [_arbook_page__WEBPACK_IMPORTED_MODULE_5__["ArbookPage"]],
            declarations: [_arbook_page__WEBPACK_IMPORTED_MODULE_5__["ArbookPage"], _components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_6__["MultiFileUploadComponent"], _components_multi_file_content_upload_multi_file_content_upload_component__WEBPACK_IMPORTED_MODULE_7__["MultiFileContentUploadComponent"]]
        })
    ], ArbookPageModule);
    return ArbookPageModule;
}());



/***/ }),

/***/ "./src/app/arbook/arbook.page.html":
/*!*****************************************!*\
  !*** ./src/app/arbook/arbook.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n\n   <!--<ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    {{bookName}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon style=\"color: white; background: #145A32; \" name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>-->\n\n  \n    <ion-title size=\"large\" text-center\n      style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #FDFEFE  ; font-weight: bolder; font-size: 15px; text-align: start;\">\n     {{bookName}}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n    <ion-icon style=\"color: whitesmoke;\" src=\"../assets/icon/close-outline.svg\" size=\"medium\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n \n  </ion-toolbar>\n\n\n</ion-header> \n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-button *ngIf=\"!showComonentFlag && !showContentAddComponentFlag\" shape=\"round\" (click)=\"anchorContentComponent()\" margin-top expand=\"block\">\n      <ion-icon style=\"color: #145A32;\" src=\"../assets/icon/add-circle.svg\"></ion-icon>\n      <span style=\"color:  #17202A; margin-left: 5px; \" class=\"ion-text-left\">New Anchor and Content</span>\n  </ion-button>\n\n  <ion-list-header *ngIf=\"(!showComonentFlag && !showContentAddComponentFlag) && plistCopy\">\n    <ion-item>\n      <ion-label style=\"color: #17202A \"> Existing anchors & content </ion-label>\n    </ion-item>\n  </ion-list-header>\n\n\n  <ion-list *ngIf=\"!showComonentFlag && !showContentAddComponentFlag\">\n    <ion-card *ngFor=\"let mapAnchorContentEntry of mapAnchorContentMapArray\" style=\"box-shadow:darkolivegreen;\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: small;\">\n        Anchor\n        </ion-card-title>\n\n        <ion-item>\n          \n            <ion-thumbnail class=\"anchor-display\">\n              <img-loader [src]=\"(mapAnchorContentEntry[1][0].get(mapAnchorContentEntry[0]))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n            </ion-thumbnail> \n         \n            <ion-chip (click)=\"addContentToCurrentAnchor(mapAnchorContentEntry[0],mapAnchorContentEntry[1][0].get(mapAnchorContentEntry[0]))\" \n            shape=\"round\" class=\"ion-text-left\" style=\"margin-left: 5px;\" button>\n              <ion-icon style=\"color: #145A32;\" src=\"../assets/icon/document-attach.svg\"></ion-icon>\n              <span style=\"color:  #17202A; margin-left: 2px; font-size: small;\" class=\"ion-text-left\">New Content</span>\n            </ion-chip>\n         \n        </ion-item>\n      </ion-card-header>\n      <ion-card-title style=\"font-size: small; margin-left: 15px;\">\n        Existing content\n      </ion-card-title>\n      <ion-card-content >\n         <ion-item-sliding *ngFor=\"let mapEntries of mapAnchorContentMapArrayValues\">\n            <ion-slides [options]=\"sliderConfig\">\n              <ion-slide *ngFor=\"let mapEntry of mapEntries\" >\n                <ion-thumbnail *ngIf=\"mapEntry[0].includes(mapAnchorContentEntry[0])\" class=\"anchorcontnet-display\">\n                  <img-loader [src]=\"mapEntry[1]\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n                </ion-thumbnail>\n              </ion-slide>\n            </ion-slides>\n          </ion-item-sliding>\n       </ion-card-content>\n  </ion-card>\n </ion-list>\n\n   \n  <ion-button *ngIf=\"showComonentFlag && !showContentAddComponentFlag\" (click)=\"upload()\" shape=\"round\" style=\"color: black\" \n  margin-top expand=\"full\">Upload Selected Anchor & Content</ion-button>\n  <ion-button *ngIf=\"!showComonentFlag && showContentAddComponentFlag && fileContentField\" (click)=\"uploadContent()\" shape=\"round\" style=\"color: black\" \n  margin-top expand=\"full\">Upload Selected Content</ion-button>\n\n  <!--call multi-file-upload component to select anchor/marker and images-->\n  <app-multi-file-upload *ngIf=\"showComonentFlag && !showContentAddComponentFlag\"></app-multi-file-upload>\n  \n  <!--call multi-file-content-upload component to add content-->\n  <app-multi-file-content-upload *ngIf=\"showContentAddComponentFlag && !showComonentFlag\"></app-multi-file-content-upload>\n  \n\n \n\n  <!--<ion-col *ngIf=\"showComonentFlag || showContentAddComponentFlag\">\n    <ion-button (click)=\"closeModal()\" shape=\"round\" style=\"color: grey\" \n     margin-top expand=\"full\">Cancel</ion-button>\n  </ion-col>-->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/arbook/arbook.page.scss":
/*!*****************************************!*\
  !*** ./src/app/arbook/arbook.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-img {\n  width: 50px;\n  height: 50px;\n  border: gray solid 1px;\n  margin: 5px auto; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.anchor-display {\n  padding-left: 5px;\n  padding-bottom: 10px;\n  padding-top: 5px; }\n\n.anchorcontnet-display {\n  padding-left: 2px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  padding-right: 2px; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nion-chip {\n  --background:   #E9F7EF; }\n\nion-button {\n  --background: #E9F7EF ; }\n\nion-card-subtitle {\n  text-align: center;\n  font-weight: bold; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.image-container {\n  min-height: 200px;\n  background-size: cover; }\n\n@media (min-width: 0px) {\n  .images {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; } }\n\n@media (min-width: 420px) {\n  .images {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3; } }\n\n@media (min-width: 720px) {\n  .images {\n    -webkit-column-count: 4;\n       -moz-column-count: 4;\n            column-count: 4; } }\n\n.one-image {\n  margin: 2px; }\n\n.drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0; }\n\n.file-input-container {\n  text-align: right; }\n\n.file-input-container input[type=\"file\"] {\n    display: none; }\n\n.file-input-container label {\n    border: 1px solid #ccc;\n    padding: 6px 12px;\n    cursor: pointer; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9hcmJvb2svYXJib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdwQjtFQUlLLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWpCO0VBSUksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZSxFQUFBOztBQUluQjtFQUdFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFJcEI7RUFFRSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLHVCQUFhLEVBQUE7O0FBR2Y7RUFDRSxzQkFBYSxFQUFBOztBQU1mO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUVFLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFO0lBQ0UsdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0UsdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0UsdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFHbEI7RUFFRSxpQkFBaUIsRUFBQTs7QUFGbkI7SUFLTSxhQUFhLEVBQUE7O0FBTG5CO0lBU00sc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBSXJCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0JBQWE7RUFDYixxQkFBZ0I7RUFFaEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXJib29rL2FyYm9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vay1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5kaXNwbGF5Y2FyZCB7XG4gICAgIC8vd2lkdGg6IDMwdnc7XG4gICAgLy8gaGVpZ2h0OjMwdmg7XG4gICAgLy8gYm9yZGVyOiBncmV5IHNvbGlkIDFweDtcbiAgICAgbWFyZ2luOiA1cHg7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgfVxuXG4uYW5jaG9yLWRpc3BsYXkge1xuXG4gICAgLy9tYXJnaW46MCBhdXRvOyAtIGZvciBjZW50ZXJpbmcgdGhlIGltYWdlXG4gICAgXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6NXB4OyBcbiAgICBcbn1cblxuLmFuY2hvcmNvbnRuZXQtZGlzcGxheSB7XG5cbiAgLy9tYXJnaW46IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDo1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgXG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG5cbiAgcGFkZGluZy1sZWZ0OjBweDtcbiAgZGlzcGxheTpibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmlvbi1jaGlwIHtcbiAgLS1iYWNrZ3JvdW5kOiAgICNFOUY3RUY7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNFOUY3RUYgO1xuICBcbn1cblxuXG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICMxQjRGNzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMHB4KSB7XG4gICAgLmltYWdlcyB7XG4gICAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgICAuaW1hZ2VzIHtcbiAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICAgIC5pbWFnZXMge1xuICAgICAgY29sdW1uLWNvdW50OiA0O1xuICAgIH1cbiAgfVxuICBcbiAgLm9uZS1pbWFnZSB7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cblxuICAuZHJvcC16b25lIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDsgXG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcblxuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgbGFiZWwge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5udi1maWxlLW92ZXIgeyBcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDsgXG59XG5cbi5teS1jdXN0b20tY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG4gIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcblxuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/arbook/arbook.page.ts":
/*!***************************************!*\
  !*** ./src/app/arbook/arbook.page.ts ***!
  \***************************************/
/*! exports provided: ArbookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbookPage", function() { return ArbookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/multi-file-upload/multi-file-upload.component */ "./src/app/components/multi-file-upload/multi-file-upload.component.ts");
/* harmony import */ var _components_multi_file_content_upload_multi_file_content_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/multi-file-content-upload/multi-file-content-upload.component */ "./src/app/components/multi-file-content-upload/multi-file-content-upload.component.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");














var ArbookPage = /** @class */ (function () {
    //nextContentValue: string = '';
    function ArbookPage(_modalController, booksService, _camera, file, _alertController, imagePicker, transfer, imageLoaderService, toastController, loadingController) {
        this._modalController = _modalController;
        this.booksService = booksService;
        this._camera = _camera;
        this.file = file;
        this._alertController = _alertController;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.imageLoaderService = imageLoaderService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.sliderConfig = {
            slidesPerView: 4,
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                autoplay: true
                //slideShadows: true,
            },
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                    swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate: function () {
                    var swiper = this;
                    var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, $wrapperEl = swiper.$wrapperEl, slidesSizesGrid = swiper.slidesSizesGrid, $ = swiper.$;
                    var params = swiper.params.coverflowEffect;
                    var isHorizontal = swiper.isHorizontal();
                    var transform$$1 = swiper.translate;
                    var center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    var rotate = isHorizontal ? params.rotate : -params.rotate;
                    var translate = params.depth;
                    // Each slide offset from center
                    for (var i = 0, length_1 = slides.length; i < length_1; i += 1) {
                        var $slideEl = slides.eq(i);
                        var slideSize = slidesSizesGrid[i];
                        var slideOffset = $slideEl[0].swiperSlideOffset;
                        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
                        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        var ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = center + "px 50%";
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
        this.uploadData = new FormData();
        this.dataReader = new FileReader();
        this.uploadStatus = "";
        this.files = [];
        this.anchorFiles = [];
        this.anchorContentFiles = [];
        //decoder = new TextDecoder();
        this.updateFlag = false;
        this.showComonentFlag = false;
        this.showContentAddComponentFlag = false;
        this.pageRefreshFlag = false;
        this.imgAnchorURLsMap = new Map();
        this.imgContentURLsMap = new Map();
        this.imgAnchorContentURLsMap = new Map();
        this.bookAnchorContentURLsArray = [];
        this.anchorURL = ""; // anchor0 url
        this.contentMap = new Map(); // anchor0content1, anchor0content1 url
        this.mapAnchorContentMap = new Map();
        this.mapAnchorContentMapArray = [];
        this.mapAnchorContentMapArrayValues = [];
        this.addtlContents = [];
        this.selectedAnchorName = "";
    }
    ArbookPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading();
        this.booksService.getBook(this.bookId)
            .subscribe(function (book) {
            _this.bookCopy = book;
            console.log("Book Copy in AR Book", _this.bookCopy);
        }, function (errmess) { return _this.errMess = errmess; });
        this.displayAnchorContentData();
    };
    ArbookPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Loading...please wait',
                            duration: 3000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    ArbookPage.prototype.displayAnchorContentData = function () {
        var _this = this;
        this.booksService.getBookARContent(this.bookId)
            .subscribe(function (x) {
            _this.imgURLs = x;
            _this.booksService.getBookPlistXml(_this.bookId)
                .subscribe(function (plist) {
                if (plist && _this.imgURLs) {
                    _this.plistCopy = plist;
                    console.log("imgURLs", _this.imgURLs);
                    console.log("plist copy", _this.plistCopy);
                    /*
                    start reading the plist copy. get the values of all the key elements
                    follow the order of the files and assign urls to keys in that orders
                    */
                    var domParser = new DOMParser();
                    var xmlDocument = domParser.parseFromString(_this.plistCopy.toString(), 'text/xml');
                    console.log("xmlDocument from s3", xmlDocument);
                    var keys = [];
                    var values = [];
                    var keyvalues = [];
                    var mainKeys = [];
                    var mapArray = [new Map()];
                    var keyElLength = xmlDocument.getElementsByTagName('key').length;
                    var valElLength = xmlDocument.getElementsByTagName('value').length;
                    for (var i = 0; i < keyElLength; i++) {
                        keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                    }
                    for (var i = 0; i < valElLength; i++) {
                        values[i] = xmlDocument.getElementsByTagName('value')[i].childNodes[0].nodeValue;
                    }
                    for (var i = 0; i < keyElLength; i++) {
                        keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                        keyvalues.push(keys[i]);
                        for (var j = 0; j < valElLength; j++) {
                            if (values[j].includes(keys[i])) {
                                keyvalues.push(values[j]);
                            }
                        }
                    }
                    var bookAnchorContentURLsMap = new Map();
                    for (var i = 0; i < keyvalues.length && i < _this.imgURLs.length; i++) {
                        bookAnchorContentURLsMap.set(keyvalues[i], _this.imgURLs[i]);
                    }
                    for (var _i = 0, _a = Array.from(bookAnchorContentURLsMap.entries()); _i < _a.length; _i++) {
                        var entry = _a[_i];
                        if (entry[0].indexOf("content") === -1) {
                            mainKeys.push(entry[0]);
                        }
                    }
                    console.log("Main Keys", mainKeys);
                    for (var i = 0; i < mainKeys.length; i++) {
                        var entry1;
                        var newContentMap = new Map();
                        var newAnchorMap = new Map();
                        for (var _b = 0, _c = Array.from(bookAnchorContentURLsMap.entries()); _b < _c.length; _b++) {
                            var entry = _c[_b];
                            if (entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].includes('content')) {
                                newContentMap.set(entry[0], entry[1]);
                            }
                            if ((entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].indexOf('content') === -1)) {
                                newAnchorMap.set(entry[0], entry[1]);
                            }
                        }
                        console.log("new content map", newContentMap);
                        console.log("new anchor map", newAnchorMap);
                        _this.mapAnchorContentMap.set(mainKeys[i], [newAnchorMap, newContentMap]);
                    }
                    console.log("mapAnchorContentMap", _this.mapAnchorContentMap);
                    _this.mapAnchorContentMapArray = Array.from(_this.mapAnchorContentMap.entries());
                    console.log("mapAnchorContentMapArray", _this.mapAnchorContentMapArray);
                    for (var _d = 0, _e = _this.mapAnchorContentMapArray; _d < _e.length; _d++) {
                        var mapAnchorContentEntry = _e[_d];
                        console.log("mapanchor content entry", mapAnchorContentEntry[0]);
                        console.log(mapAnchorContentEntry[1][1].values());
                        _this.mapAnchorContentMapArrayValues.push(Array.from(mapAnchorContentEntry[1][1].entries()));
                    }
                    console.log("mapAnchorContentMapArrayValues", _this.mapAnchorContentMapArrayValues);
                }
                else {
                    console.log("plist is empty");
                    return;
                }
            }), function (errMess) { return console.log(errMess); };
        }, function (errmess) { return _this.errMess = errmess; });
    };
    ArbookPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 3000,
                            position: 'middle'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArbookPage.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    ArbookPage.prototype.anchorContentComponent = function () {
        console.log("inside anchor and Content Component");
        this.showComonentFlag = true;
    };
    ArbookPage.prototype.addContentToCurrentAnchor = function (anchorName, anchorURL) {
        var _this = this;
        console.log("AnchorName", anchorName);
        console.log("AnchorURL", anchorURL);
        this.selectedAnchorName = anchorName;
        /*
              1. select the anchor and get the corresponding anchorName, anchorURL - done
              2. using the bookId get the Book plist - done
              3. check if this plist contains selected anchorName - done
              4. If yes,
                  find out the last anchorNameContentX belonging to this entry in the plist - done
                  present option to the user to add new content - done
                  add that contnet in the xml as anchorNamecontentX+1 to corresponding anchorName - done
                  upload updated xml and anchorNamecontentX+1 to s3 - done
                
        */
        this.booksService.getBookPlistXml(this.bookId)
            .subscribe(function (plist) {
            _this.plistCopy = plist;
            console.log("plist copy", _this.plistCopy);
            var domParser = new DOMParser();
            var xmlDocument = domParser.parseFromString(_this.plistCopy.toString(), 'text/xml');
            console.log("xmlDocument from s3", xmlDocument);
            var keyElLength = xmlDocument.getElementsByTagName('key').length;
            console.log("keyElLength", keyElLength);
            var valElLength = xmlDocument.getElementsByTagName('value').length;
            console.log("valElLength", valElLength);
            for (var i = 0; i < keyElLength; i++) {
                var anchorKey = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                if (anchorKey === anchorName) {
                    _this.showContentAddComponentFlag = true;
                    _this.showComonentFlag = false;
                }
            }
        }), function (errMess) { return console.log(errMess); };
    };
    ArbookPage.prototype.uploadContent = function () {
        var _this = this;
        console.log("this.selected anchor name", this.selectedAnchorName);
        this.addtlContents = this.fileContentField.getContentFiles();
        console.log("Additional Contents", this.addtlContents);
        this.booksService.getBookPlistXml(this.bookId)
            .subscribe(function (plist) {
            _this.plistCopy = plist;
            console.log("plist copy", _this.plistCopy);
            var domParser = new DOMParser();
            var xmlDocument = domParser.parseFromString(_this.plistCopy.toString(), 'text/xml');
            console.log("xmlDocument from s3", xmlDocument);
            var keyElLength = xmlDocument.getElementsByTagName('key').length;
            console.log("keyElLength", keyElLength);
            var valElLength = xmlDocument.getElementsByTagName('value').length;
            console.log("valElLength", valElLength);
            var existingContentValues = [];
            for (var i = 0; i < keyElLength; i++) {
                var anchorKey = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                if (anchorKey === _this.selectedAnchorName) {
                    for (var j = 0; j < valElLength; j++) {
                        var value = xmlDocument.getElementsByTagName('value')[j].childNodes[0].nodeValue;
                        if (value.includes(_this.selectedAnchorName)) {
                            existingContentValues.push(value);
                        }
                    }
                }
            }
            var plistMap = new Map();
            plistMap.set(_this.selectedAnchorName, []);
            console.log("selected anchor name", _this.selectedAnchorName);
            for (var j = 0; j < _this.addtlContents.length; j++) {
                var index = _this.addtlContents[j].rawFile.type.indexOf("/");
                var contenttype = _this.addtlContents[j].rawFile.type.substring(0, index);
                var nextContentName = _this.selectedAnchorName + 'content' + (existingContentValues.length + j + 1) + contenttype;
                plistMap.get(_this.selectedAnchorName).push(nextContentName);
            }
            console.log("plistMap", plistMap);
            //append content files
            for (var i = 0; i < _this.addtlContents.length; i++) {
                var index = _this.addtlContents[i].rawFile.type.indexOf("/");
                var contenttype = _this.addtlContents[i].rawFile.type.substring(0, index);
                var nextContentName = _this.selectedAnchorName + 'content' + ((existingContentValues.length + i + 1)) + contenttype;
                _this.uploadData.append('imageFile', _this.addtlContents[i].rawFile, nextContentName);
            }
            // append entries to right key element in the xml document
            var root = xmlDocument.getElementsByTagName('plist')[0];
            console.log("root ", root);
            var keys = xmlDocument.getElementsByTagName('key');
            console.log("keys", keys);
            for (var i = 0; i < keys.length; i++) {
                var nodevalue = keys[i].childNodes[0].nodeValue;
                console.log("nodevalue", nodevalue);
                for (var _i = 0, _a = Array.from(plistMap.entries()); _i < _a.length; _i++) {
                    var entry = _a[_i];
                    if (entry[0] === nodevalue) {
                        console.log("SUCCESS", entry[0], nodevalue);
                        console.log("keys[i]", keys[i]);
                        for (var j = 0; j < entry[1].length; j++) {
                            var valEL = xmlDocument.createElement('value');
                            valEL.textContent = entry[1][j];
                            keys[i].appendChild(valEL);
                        }
                    }
                }
            }
            // serialize 
            console.log("XML document before serializing", xmlDocument);
            var serializer = new XMLSerializer();
            var xmlSerializedDoc = serializer.serializeToString(xmlDocument);
            console.log("xml serailizd doc", xmlSerializedDoc);
            // append xml blob
            var blob = new Blob([xmlSerializedDoc], { type: "text/xml" });
            _this.uploadData.append('xmlFile', blob, _this.bookId + 'plist');
            // update book ar flag & then upload the data
            _this.updateFlag = true;
            _this.bookCopy.bookarenabled = true;
            _this.booksService.updateBookARFlag(_this.bookId, _this.bookCopy)
                .subscribe(function (res) {
                console.log(res);
                // upload data
                _this.booksService.uploadAnchorContentAndPlist(_this.bookId, _this.uploadData, _this.updateFlag, _this.bookCopy)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.presentToast("Content Data Augmented Successfully!");
                    _this._modalController.dismiss();
                    //this.closeModal();
                });
            });
        }), function (errMess) { return console.log(errMess); };
    };
    ArbookPage.prototype.upload = function () {
        var _this = this;
        /*
        1. check if there is plist xml existing for bookId. - DONE
        2. If no, - DONE
              create plist xml with new anchor, anchor's page nr and content
              upload content, xml to s3 bucket.
        3. If yes, - DONE
            Display the list of anchors and correspoding contents as thumbnails so that user knows which are anchors
            and which are content
            Ask user if s/he wants to add new content to an existing anchor OR to new anchor
            
          3.1 - DONE
            if (to an existing anchor) {
              select the anchor
              retrive the anchor URL, get the bookId
              extract the anchorName from the url
              using the bookId get the Book plist and see if anchorName exists in the plist xml
              when the plist xml has the anchorname {
                find out the last anchorNamecontentX in the list
                present option to the user to add new content
                add that contnet in the xml as anchorNamecontentX+1
                upload updated xml and anchorNamecontentX+1 to s3
              }
            }
          3.2 - DONE
            if (to new anchor) {
              add new anchor and new content, append it to plist xml
              upload anchor, content, xml to s3
            }
    
      */
        this.booksService.getBookPlistXml(this.bookId)
            .subscribe(function (plist) {
            console.log("link to book plist found");
            console.log("plist", plist);
            if (plist) {
                _this.plistCopy = plist;
                _this.updateFlag = true;
                _this.prepareAnchorAndContentsDataAndUpload(_this.updateFlag);
            }
            else {
                _this.updateFlag = false;
                console.log("plist is empty");
                _this.prepareAnchorAndContentsDataAndUpload(_this.updateFlag);
            }
        }), function (errMess) { return console.log(errMess); };
    };
    ArbookPage.prototype.prepareAnchorAndContentsDataAndUpload = function (flag) {
        var _this = this;
        var anchor = this.fileField.getAnchorFiles();
        console.log("Anchor from filefield", anchor);
        var contents = this.fileField.getAnchorContentFiles();
        console.log("CONTENTS, CONTENT", contents);
        var arPageValue = this.fileField.addAnchorPageNrGroup.value;
        var anchorPageNr = arPageValue['anchorpagenr'];
        console.log("Page Number", anchorPageNr);
        // update existing xml plist with page number of the new anchor, anchor and content data
        if (flag) {
            var domParser = new DOMParser();
            var xmlDocument = domParser.parseFromString(this.plistCopy.toString(), 'text/xml');
            console.log("xmlDocument from s3", xmlDocument);
            var keyElLength = xmlDocument.getElementsByTagName('key').length;
            console.log("keyElLength", keyElLength);
            //let prevAnchorName =  xmlDocument.getElementsByTagName('key')[keyElLength-1].childNodes[0].nodeValue;
            var anchorName = 'anchor' + keyElLength;
            var plistMap = new Map();
            plistMap.set(anchorName, []);
            for (var j = 0; j < contents.length; j++) {
                var index = contents[j].type.indexOf('/');
                var contenttype = contents[j].type.substring(0, index);
                var contentName = anchorName + 'content' + (j + 1) + contenttype;
                plistMap.get(anchorName).push(contentName);
            }
            console.log("plistMap", plistMap);
            console.log("Anchor raw file", anchor[0].rawFile);
            // append anchor file
            this.uploadData.append('imageFile', anchor[0].rawFile, anchorName);
            // append cotent files
            for (var i = 0; i < contents.length; i++) {
                var index = contents[i].type.indexOf('/');
                var contenttype = contents[i].type.substring(0, index);
                /*let index = contents[i].rawFile.type.indexOf("/");
                let contenttype = this.addtlContents[j].rawFile.type.substring(0,index);*/
                var contentName = anchorName + 'content' + (i + 1) + contenttype;
                this.uploadData.append('imageFile', contents[i].rawFile, contentName);
            }
            var root = xmlDocument.getElementsByTagName('plist')[0];
            console.log("root ", root);
            for (var _i = 0, _a = Array.from(plistMap.entries()); _i < _a.length; _i++) {
                var entry = _a[_i];
                console.log("Entries", entry);
                var keyEl = xmlDocument.createElement('key');
                keyEl.textContent = entry[0];
                root.appendChild(keyEl);
                var pageNr = xmlDocument.createElement('anchorPageNr');
                pageNr.textContent = anchorPageNr;
                keyEl.appendChild(pageNr);
                var keyElvalues = entry[1];
                for (var j = 0; j < keyElvalues.length; j++) {
                    var valEl = xmlDocument.createElement('value');
                    valEl.textContent = keyElvalues[j];
                    keyEl.appendChild(valEl);
                }
            }
            var serializer = new XMLSerializer();
            var xmlSerializedDoc = serializer.serializeToString(xmlDocument);
            console.log("xml serailizd doc", xmlSerializedDoc);
            var blob = new Blob([xmlSerializedDoc], { type: "text/xml" });
            this.uploadData.append('xmlFile', blob, this.bookId + 'plist');
        }
        else {
            var anchorName = 'anchor0';
            var plistMap = new Map();
            plistMap.set(anchorName, []);
            for (var j = 0; j < contents.length; j++) {
                var index = contents[j].type.indexOf('/');
                var contenttype = contents[j].type.substring(0, index);
                var contentName = anchorName + 'content' + (j + 1) + contenttype;
                plistMap.get(anchorName).push(contentName);
            }
            console.log("plistMap", plistMap);
            // append anchor file as anchor0
            this.uploadData.append('imageFile', anchor[0].rawFile, anchorName);
            // append cotent files as anchor0content0, anchor0,content1
            for (var i = 0; i < contents.length; i++) {
                var index = contents[i].type.indexOf('/');
                var contenttype = contents[i].type.substring(0, index);
                var contentName = anchorName + 'content' + (i + 1) + contenttype;
                this.uploadData.append('imageFile', contents[i].rawFile, contentName);
            }
            // construct new xml plist file 
            var doc = document.implementation.createDocument('', '', null);
            var root = doc.createElement('plist');
            doc.appendChild(root);
            for (var _b = 0, _c = Array.from(plistMap.entries()); _b < _c.length; _b++) {
                var entry = _c[_b];
                console.log("Entries", entry);
                var keyEl = doc.createElement('key');
                keyEl.textContent = entry[0];
                root.appendChild(keyEl);
                var pageNr = doc.createElement('anchorPageNr');
                pageNr.textContent = anchorPageNr;
                keyEl.appendChild(pageNr);
                var keyElvalues = entry[1];
                for (var j = 0; j < keyElvalues.length; j++) {
                    var valEl = doc.createElement('value');
                    valEl.textContent = keyElvalues[j];
                    keyEl.appendChild(valEl);
                }
            }
            var serializer = new XMLSerializer();
            var xmlSerializedDoc = serializer.serializeToString(doc);
            console.log("xml serailizd doc", xmlSerializedDoc);
            var blob = new Blob([xmlSerializedDoc], { type: "text/xml" });
            this.uploadData.append('xmlFile', blob, this.bookId + 'plist');
        }
        // update book ar flag & then upload the data
        this.bookCopy.bookarenabled = true;
        this.booksService.updateBookARFlag(this.bookId, this.bookCopy)
            .subscribe(function (res) {
            console.log(res);
            // upload data
            _this.booksService.uploadAnchorContentAndPlist(_this.bookId, _this.uploadData, _this.updateFlag, _this.bookCopy)
                .subscribe(function (res) {
                console.log(res);
                _this.presentToast("Anchor and Content Data Uploaded Successfully !");
                _this._modalController.dismiss();
                //this.closeModal();
            });
        });
    };
    ArbookPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this.showComonentFlag = false;
        this.showContentAddComponentFlag = false;
        //this._modalController.dismiss();
    };
    ArbookPage.prototype.refreshBookList = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.clearCache();
            event.target.complete();
        }, 3000);
    };
    ArbookPage.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        // refresher.complete();
    };
    ArbookPage.prototype.close = function () {
        if (this.showComonentFlag || this.showContentAddComponentFlag) {
            this.closeModal();
        }
        else {
            this._modalController.dismiss();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["MultiFileUploadComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["MultiFileUploadComponent"])
    ], ArbookPage.prototype, "fileField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_multi_file_content_upload_multi_file_content_upload_component__WEBPACK_IMPORTED_MODULE_9__["MultiFileContentUploadComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_multi_file_content_upload_multi_file_content_upload_component__WEBPACK_IMPORTED_MODULE_9__["MultiFileContentUploadComponent"])
    ], ArbookPage.prototype, "fileContentField", void 0);
    ArbookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arbook',
            template: __webpack_require__(/*! ./arbook.page.html */ "./src/app/arbook/arbook.page.html"),
            styles: [__webpack_require__(/*! ./arbook.page.scss */ "./src/app/arbook/arbook.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_10__["ImageLoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ArbookPage);
    return ArbookPage;
}());

/*async selectImageSource() {

  const cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this._camera.DestinationType.FILE_URI,
    encodingType: this._camera.EncodingType.JPEG,
    mediaType: this._camera.MediaType.PICTURE,
    targetHeight: 45,
    targetWidth: 80,
    correctOrientation: true,
    sourceType: this._camera.PictureSourceType.CAMERA
  };

  const galleryOptions: CameraOptions = {
    quality: 100,
    destinationType: this._camera.DestinationType.FILE_URI,
    encodingType: this._camera.EncodingType.JPEG,
    mediaType: this._camera.MediaType.PICTURE,
    targetHeight: 45,
    targetWidth: 80,
    correctOrientation: true,
    sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
  };

  this.markerImages = [];
  this.capturedImages = [];
  this.markerImagesLength = 0;

  const alert = await this._alertController.create({
    header: "Select Source",
    message: "Pick a source for your image",
    buttons: [
      {
        text: "Camera",
        handler: ()=> {


          this._camera.getPicture(cameraOptions).then((result) => {
            
           
            this.markerImages.push('file://'+ result);
            console.log("Marker images length", this.markerImages.length);
            this.markerImagesLength = this.markerImages.length;
  
           }, (err) => {
             
             console.log(err);
          });
          
         
        
      }
    },
    {
        text: "Gallery",
        handler: ()=> {
         
         

       this.imagePicker.getPictures(galleryOptions).then((results) => {
        for (var i = 0; i < results.length; i++) {
          console.log("RESULTS", results[i]);
          this.markerImages.push('file://'+ results[i]);
        }
        console.log("Marker images length", this.markerImages.length);
        this.markerImagesLength = this.markerImages.length;
        
      

       }, (err) => {
         // Handle error
         console.log(err);
      });

      

    }
  }
]
});

  await alert.present();

}*/
/*readFile(file: any) {

  const reader = new FileReader();
  console.log("file type", file.type);
  console.log("file type", file.name);
  reader.onloadend = () => {
    this.uploadData = new FormData();
    if (reader.result) {
      const imgBlob = new Blob([reader.result], {type: file.type});
      this.uploadData.append('arMarkerImageFile', imgBlob, file.name);

      this.booksService.uploadMarkerImage(this.bookId, this.uploadData)
      .subscribe(res => {
        console.log("Uploaded image details ----->",res);
      });
   
    }
  };
  reader.readAsArrayBuffer(file);
}*/
/*createMarkers() {

 for (var i = 0; i < this.markerImages.length; i++) {
   console.log("Selected image is ", this.markerImages[i]);
 }
 console.log("inside createMarkers");
 let counter = 0;
 var ref = this;
 function InnerFunc() {
  
   console.log("Beginning Counter", counter);
   console.log("inside InnerFunc");
   console.log("file system url", ref.markerImages[counter]);

   ref.file.resolveLocalFilesystemUrl(ref.markerImages[counter])
   .then(entry => {
      console.log("inside resolve local file system url");
      
      (<FileEntry>entry).file(file => ref.readFile(file));

      counter++;
      console.log("Inside Counter is", counter);
      if (counter < ref.markerImages.length) {
       InnerFunc();
     }
     else {
       alert("successfully uploaded all images");
     }
    })
   .catch(err => {
      console.log("error reading file")
   })
   
 }
 console.log("innerFunc getting called");
 InnerFunc();

 
}*/


/***/ }),

/***/ "./src/app/components/multi-file-content-upload/multi-file-content-upload.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/multi-file-content-upload/multi-file-content-upload.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\n  <!--<div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploaderAnchor\" class=\"drop-zone\">\n    Drop files here...\n  </div>\n  <div class=\"file-input-container\">\n    <label>\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploaderAnchor\" single />\n      Add Anchor\n    </label>\n  </div>\n  <ion-label>Files: {{ uploaderAnchor?.queue?.length }}</ion-label>\n  <ion-list>\n    <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"false\">\n      <ion-item *ngFor=\"let item of uploaderAnchor.queue\">\n        <ion-label>\n          {{ item?.file?.name }}\n        </ion-label>\n        <ion-reorder></ion-reorder>\n      </ion-item>\n    </ion-reorder-group>\n  </ion-list>-->\n\n  <!--<div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploaderContent\" class=\"drop-zone\">\n    Drop files here...\n  </div>-->\n  <!--<ion-card class=\"displaycard\">\n    <div class=\"file-input-container\">\n      <label>\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploaderContent\"  multiple />\n        Click to Augment Content to the selected anchor\n      </label>\n    </div>\n    <ion-label>Files: {{ uploaderContent?.queue?.length }}</ion-label>\n    <ion-list>\n      <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"false\">\n        <ion-item *ngFor=\"let item of uploaderContent.queue\">\n          <ion-label>\n            {{ item?.file?.name }}\n          </ion-label>\n          <ion-reorder></ion-reorder>\n        </ion-item>\n      </ion-reorder-group>\n    </ion-list>\n  \n  </ion-card>-->\n\n  <ion-card class=\"displaycard\">\n    <div class=\"file-input-container\">\n      <label>\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploaderContent\"  multiple />\n         <span style=\"font-size: small;\">Select content</span>\n      </label>\n    </div>\n    <ion-label>Files: {{ uploaderContent?.queue?.length }}</ion-label>\n    <ion-list>\n      <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"false\">\n        <ion-item *ngFor=\"let item of uploaderContent.queue\">\n          <ion-label>\n            {{ item?.file?.name }}\n          </ion-label>\n          <ion-reorder></ion-reorder>\n        </ion-item>\n      </ion-reorder-group>\n    </ion-list>\n  \n  </ion-card>\n\n\n\n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/multi-file-content-upload/multi-file-content-upload.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/multi-file-content-upload/multi-file-content-upload.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0; }\n\n.file-input-container {\n  text-align: center; }\n\n.file-input-container input[type=\"file\"] {\n    display: none; }\n\n.file-input-container label {\n    background-color: #E9F7EF;\n    border: 1px solid #ccc;\n    padding: 5px;\n    cursor: pointer;\n    margin: 5px; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n.displaycard {\n  margin: 10px;\n  padding-left: 5px;\n  padding-right: 1px;\n  padding-bottom: 5px;\n  padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9jb21wb25lbnRzL211bHRpLWZpbGUtY29udGVudC11cGxvYWQvbXVsdGktZmlsZS1jb250ZW50LXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFHbEI7RUFFSSxrQkFBa0IsRUFBQTs7QUFGdEI7SUFLUSxhQUFhLEVBQUE7O0FBTHJCO0lBU1EseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFLbkI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFJSyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL211bHRpLWZpbGUtY29udGVudC11cGxvYWQvbXVsdGktZmlsZS1jb250ZW50LXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLXpvbmUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlcjogZG90dGVkIDNweCAjZGVkZGRkOyBcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdFRjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBcbiAgICB9XG59XG5cbi5udi1maWxlLW92ZXIgeyBcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggcmVkOyBcbn1cblxuLmRpc3BsYXljYXJkIHtcbiAgICAvLyB3aWR0aDogMzB2dztcbiAgICAgLy9oZWlnaHQ6MzB2aDtcbiAgICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgICBtYXJnaW46IDEwcHg7XG4gICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/multi-file-content-upload/multi-file-content-upload.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/multi-file-content-upload/multi-file-content-upload.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MultiFileContentUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFileContentUploadComponent", function() { return MultiFileContentUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MultiFileContentUploadComponent = /** @class */ (function () {
    function MultiFileContentUploadComponent(_modalController) {
        this._modalController = _modalController;
        this.uploaderAnchor = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
        this.uploaderContent = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
    }
    MultiFileContentUploadComponent.prototype.getAnchorFiles = function () {
        return this.uploaderAnchor.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    MultiFileContentUploadComponent.prototype.getContentFiles = function () {
        return this.uploaderContent.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    MultiFileContentUploadComponent.prototype.fileOverBase = function (ev) {
        this.hasBaseDropZoneOver = ev;
    };
    MultiFileContentUploadComponent.prototype.reorderFiles = function (reorderEvent) {
        var element = this.uploaderAnchor.queue.splice(reorderEvent.detail.from, 1)[0];
        this.uploaderAnchor.queue.splice(reorderEvent.detail.to, 0, element);
    };
    MultiFileContentUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-file-content-upload',
            template: __webpack_require__(/*! ./multi-file-content-upload.component.html */ "./src/app/components/multi-file-content-upload/multi-file-content-upload.component.html"),
            styles: [__webpack_require__(/*! ./multi-file-content-upload.component.scss */ "./src/app/components/multi-file-content-upload/multi-file-content-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], MultiFileContentUploadComponent);
    return MultiFileContentUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n\n<ion-content>\n\n  <!--<div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploaderAnchor\" class=\"drop-zone\">\n    Drop files here...\n  </div>-->\n  <ion-card class=\"displaycard\">\n    <div class=\"file-input-container\">\n      <label>\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploaderAnchor\" single />\n        <span style=\"font-size: small;\">Select anchor (max. 1)</span>\n      </label>\n    </div>\n    <ion-label>Files: {{ uploaderAnchor?.queue?.length }}</ion-label>\n   \n   \n    <ion-list>\n      <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"false\">\n        <ion-item *ngFor=\"let item of uploaderAnchor.queue\">\n          <ion-label>\n            {{ item?.file?.name }}\n          </ion-label>\n          <ion-reorder></ion-reorder>\n        </ion-item>\n      </ion-reorder-group>\n    </ion-list>\n\n\n    <br><br>\n    <form id=\"addAnchorPageNr\" [formGroup]=\"addAnchorPageNrGroup\" #aform=\"ngForm\">\n      <ion-item>\n        <ion-label style=\"font-size: smaller;\" color=\"medium\">Anchor's Book Page #:</ion-label>\n        <ion-input formControlName=\"anchorpagenr\" type=\"text\"></ion-input>\n        <!--<ion-button (click)=\"submitForm()\" shape=\"round\"  style=\"color:#1B4F72\" \n        [disabled]=\"addAnchorPageNrGroup.invalid\" margin-top expand=\"full\">Add</ion-button>-->\n      </ion-item>\n    </form>\n\n  </ion-card>\n\n  \n\n  <!--<div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploaderContent\" class=\"drop-zone\">\n    Drop files here...\n  </div>-->\n  <ion-card class=\"displaycard\">\n    <div class=\"file-input-container\">\n      <label>\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploaderContent\"  multiple />\n        <span style=\"font-size: small;\">Select corresponding content</span>\n      </label>\n    </div>\n    <ion-label>Files: {{ uploaderContent?.queue?.length }}</ion-label>\n    <ion-list>\n      <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"false\">\n        <ion-item *ngFor=\"let item of uploaderContent.queue\">\n          <ion-label>\n            {{ item?.file?.name }}\n          </ion-label>\n          <ion-reorder></ion-reorder>\n        </ion-item>\n      </ion-reorder-group>\n    </ion-list>\n  </ion-card>\n  \n  \n  \n  \n\n</ion-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0; }\n\n.file-input-container {\n  text-align: center; }\n\n.file-input-container input[type=\"file\"] {\n    display: none; }\n\n.file-input-container label {\n    background-color: #E9F7EF;\n    border: 1px solid #ccc;\n    padding: 5px;\n    cursor: pointer;\n    margin: 5px; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n.displaycard {\n  margin: 10px;\n  padding-left: 5px;\n  padding-right: 1px;\n  padding-bottom: 5px;\n  padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9jb21wb25lbnRzL211bHRpLWZpbGUtdXBsb2FkL211bHRpLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUdsQjtFQUVJLGtCQUFrQixFQUFBOztBQUZ0QjtJQUtRLGFBQWEsRUFBQTs7QUFMckI7SUFTUSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQUluQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUlLLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVsdGktZmlsZS11cGxvYWQvbXVsdGktZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC16b25lIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDsgXG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RUY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG59XG5cbi5udi1maWxlLW92ZXIgeyBcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggcmVkOyBcbn1cblxuLmRpc3BsYXljYXJkIHtcbiAgICAvLyB3aWR0aDogMzB2dztcbiAgICAgLy9oZWlnaHQ6MzB2aDtcbiAgICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgICBtYXJnaW46IDEwcHg7XG4gICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MultiFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFileUploadComponent", function() { return MultiFileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var MultiFileUploadComponent = /** @class */ (function () {
    function MultiFileUploadComponent(_modalController, fb) {
        this._modalController = _modalController;
        this.fb = fb;
        this.uploaderAnchor = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
        this.uploaderContent = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
        this.formErrors = {
            'anchorpagenr': ''
        };
        this.validationMessages = {
            'anchorpagenr': {
                'required': 'Anchor Book Page # is required.',
                'minlength': 'Must be at least 1 character long.',
                'maxlength': 'Cannot be more than 5 characters long.'
            },
        };
    }
    MultiFileUploadComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    MultiFileUploadComponent.prototype.submitNr = function () {
        this.pageNr = this.addAnchorPageNrGroup.value;
    };
    MultiFileUploadComponent.prototype.createForm = function () {
        this.addAnchorPageNrGroup = this.fb.group({
            anchorpagenr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)]]
        });
    };
    MultiFileUploadComponent.prototype.getAnchorFiles = function () {
        return this.uploaderAnchor.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    MultiFileUploadComponent.prototype.getAnchorContentFiles = function () {
        return this.uploaderContent.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    MultiFileUploadComponent.prototype.fileOverBase = function (ev) {
        this.hasBaseDropZoneOver = ev;
    };
    MultiFileUploadComponent.prototype.reorderFiles = function (reorderEvent) {
        var element = this.uploaderAnchor.queue.splice(reorderEvent.detail.from, 1)[0];
        this.uploaderAnchor.queue.splice(reorderEvent.detail.to, 0, element);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('aform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MultiFileUploadComponent.prototype, "addAnchorPageNrGroupFormDirective", void 0);
    MultiFileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-file-upload',
            template: __webpack_require__(/*! ./multi-file-upload.component.html */ "./src/app/components/multi-file-upload/multi-file-upload.component.html"),
            styles: [__webpack_require__(/*! ./multi-file-upload.component.scss */ "./src/app/components/multi-file-upload/multi-file-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], MultiFileUploadComponent);
    return MultiFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/managebookshelp/managebookshelp.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/managebookshelp/managebookshelp.module.ts ***!
  \***********************************************************/
/*! exports provided: ManagebookshelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagebookshelpPageModule", function() { return ManagebookshelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _managebookshelp_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managebookshelp.page */ "./src/app/managebookshelp/managebookshelp.page.ts");






var ManagebookshelpPageModule = /** @class */ (function () {
    function ManagebookshelpPageModule() {
    }
    ManagebookshelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [_managebookshelp_page__WEBPACK_IMPORTED_MODULE_5__["ManagebookshelpPage"]],
            declarations: [_managebookshelp_page__WEBPACK_IMPORTED_MODULE_5__["ManagebookshelpPage"]]
        })
    ], ManagebookshelpPageModule);
    return ManagebookshelpPageModule;
}());



/***/ }),

/***/ "./src/app/managebookshelp/managebookshelp.page.html":
/*!***********************************************************!*\
  !*** ./src/app/managebookshelp/managebookshelp.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n      <ion-title size=\"large\" text-center\n             style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n             color: #FDFEFE  ; font-weight: bolder; font-size: 15px; text-align: start;\">\n            HOWTO - Manage Books\n       </ion-title>\n       <ion-buttons slot=\"end\">\n        <ion-icon style=\"color: whitesmoke;\" src=\"../assets/icon/close-outline.svg\" \n        size=\"medium\" (click)=\"closeModal()\"></ion-icon>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-title style=\"font-weight: bold; padding: 10px;\">\n      Add New Book in the bookshelf\n    </ion-card-title>\n    <ion-card-content>\n      The dialogue provided for you to add your books in <strong>Booxar</strong> bookshelf. \n    </ion-card-content>\n    <ion-card-content>\n      After successful entry, newly added book will be made available for others to borrow.\n      You will start seeing it in the <strong>'Bookshelf'</strong> tab in the app.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title style=\"font-weight: bold; padding: 10px;\">\n      My books - as Book Owner\n    </ion-card-title>\n    <ion-card-content>\n      Dropdown list containing all the books logged in user has added in the bookshelf as <strong>\n      'Book Owner'</strong>.\n    </ion-card-content>\n    <ion-card-content>\n      Books, for which the logged in user is not the owner,  will not be listed. User can filter the books as per \n      the current status - <strong>'Available', 'Borrowed', 'Reserved'</strong>. \n    </ion-card-content>\n\n    <ion-card-content>\n     <strong>Take Action</strong>: As a book owner you can perform following actions on the book.\n     <ion-card-content>\n      <strong> 1. Lend or Make Available </strong>: Scan the QR code presented by the book requester. \n      If the QR code matches, requester or bnorrower authorization is successful. \n      Lend the book to the borrower OR accept the book back from the borrower.\n     </ion-card-content>\n     <ion-card-content>\n      <strong> 2. Enanble for AR (Augmented Reality)</strong>: The dialogues provided here enable the book owner to add Anchors\n      and corresponding content to be augmented. \n      <ion-card-content>\n        <strong>Anchors</strong>: Anchors are the makrers on top of which additional contextual content is augmented. i.e. \n      when the app user points smart device on the anchors, augmented content is rendered. For the <strong>Booxar</strong>\n      app, Anchor can be existing images in the book. \n      </ion-card-content>\n      <ion-card-content>\n        <strong>Content</strong>: Conten is the media content you want to attach and upload so that it is augmented on the existing\n        anchors in the book. When the app user points  smart device on the anchors, this content is rendered.\n      </ion-card-content>\n      Once <strong>Anchor</strong> and <strong>Content</strong> are uploaded for the book, the book is 'AR Enabled' and it\n      starts appearing in the <strong>ARBooks</strong> tab of the app. \n     </ion-card-content>\n     <ion-card-content>\n      <strong> 3. Delete</strong>: The dialogue provided for the <strong>book owner</strong> to remove the book from bookshelf. \n      Once the book is removed, other app users will not see this book listed in the <strong>Bookshelf</strong> tab.\n     </ion-card-content>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-title style=\"font-weight: bold; padding: 10px;\">\n      My books - as Book Requester\n    </ion-card-title>\n    <ion-card-content>\n      The dialogue provided for you to view the books you have <strong>reserved</strong> or <strong>\n      borrowed</strong> from other book owners. If the book has been borrowed, it also lists the 'Return By' date.\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/managebookshelp/managebookshelp.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/managebookshelp/managebookshelp.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background: #F4F6F7 ; }\n\nion-toolbar {\n  --background: #145A32; }\n\nion-card {\n  border-radius: 10px;\n  border: #145A32; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9tYW5hZ2Vib29rc2hlbHAvbWFuYWdlYm9va3NoZWxwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNCQUFhLEVBQUE7O0FBR2Y7RUFFRSxxQkFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hbmFnZWJvb2tzaGVscC9tYW5hZ2Vib29rc2hlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNEY2RjcgO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbn1cblxuaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6ICMxNDVBMzI7XG59XG5cbi5jZW50ZXJ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/managebookshelp/managebookshelp.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/managebookshelp/managebookshelp.page.ts ***!
  \*********************************************************/
/*! exports provided: ManagebookshelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagebookshelpPage", function() { return ManagebookshelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ManagebookshelpPage = /** @class */ (function () {
    function ManagebookshelpPage(_modalController) {
        this._modalController = _modalController;
    }
    ManagebookshelpPage.prototype.ngOnInit = function () {
    };
    ManagebookshelpPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this._modalController.dismiss();
    };
    ManagebookshelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-managebookshelp',
            template: __webpack_require__(/*! ./managebookshelp.page.html */ "./src/app/managebookshelp/managebookshelp.page.html"),
            styles: [__webpack_require__(/*! ./managebookshelp.page.scss */ "./src/app/managebookshelp/managebookshelp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ManagebookshelpPage);
    return ManagebookshelpPage;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");






var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    FeedbackService.prototype.submitFeedback = function (feedback) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback/', feedback, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    FeedbackService.prototype.getFeedback = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    FeedbackService.prototype.getFeaturedFeedback = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback?rating=5')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/shared/feedback.ts":
/*!************************************!*\
  !*** ./src/app/shared/feedback.ts ***!
  \************************************/
/*! exports provided: Feedback, ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];


/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _addbook_addbook_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addbook/addbook.module */ "./src/app/addbook/addbook.module.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _arbook_arbook_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../arbook/arbook.module */ "./src/app/arbook/arbook.module.ts");
/* harmony import */ var _managebookshelp_managebookshelp_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../managebookshelp/managebookshelp.module */ "./src/app/managebookshelp/managebookshelp.module.ts");











var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _addbook_addbook_module__WEBPACK_IMPORTED_MODULE_7__["AddbookPageModule"],
                _arbook_arbook_module__WEBPACK_IMPORTED_MODULE_9__["ArbookPageModule"],
                _managebookshelp_managebookshelp_module__WEBPACK_IMPORTED_MODULE_10__["ManagebookshelpPageModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoaderModule"],
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
            //exports: [,  ]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    \n    <ion-title size=\"large\" \n    style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Manage \n   \n    </ion-title>\n    \n\n    <ion-buttons slot=\"end\">\n     \n      <ion-icon style=\"color: #FDFEFE;\" src=\"../assets/icon/information-circle.svg\" size=\"medium\" (click)=\"helpModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n  \n  \n\n\n</ion-header> \n\n\n\n<ion-content>\n\n  \n    \n    <ion-button shape=\"round\" (click)=\"addBookModal()\" margin-top expand=\"block\" style=\"color:darkgreen\">\n        <ion-icon style=\"color: #145A32;\" src=\"../assets/icon/add-circle.svg\"></ion-icon>\n        <span style=\"color:  #145A32; margin-left: 5px; \" class=\"ion-text-left\"> Add new book in the bookshelf</span>\n    </ion-button>\n   \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n      <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n  \n  <!--<ion-list>-->\n\n    <ion-button shape=\"round\" margin-top expand=\"block\">\n      <ion-icon style=\"color: olivedrab; \" src=\"../assets/icon/book.svg\"></ion-icon>\n      <span style=\"color:  olivedrab; margin-left: 5px; \" class=\"ion-text-left\"> My books - as Book Owner</span>\n    </ion-button>\n\n    <ion-select (ionChange)=\"displayBooksByStatus($event)\" interface=\"popover\" placeholder=\"Select current status...\">\n      <ion-select-option *ngFor=\"let status of bookcurrentstatus\" [value]=\"status\"> {{status}}</ion-select-option>\n   </ion-select>\n   \n   <!--<ion-label class=\"ion-text-wrap\" *ngIf=\"nobooksEXIST\" style=\"color: green; padding: 20px; font-size: small;\">You have not added any books yet</ion-label>-->\n   <ion-label class=\"ion-text-wrap\" *ngIf=\"nobooksAVAILABLE\" style=\"color: green; padding: 20px; font-size: small;\">None Available OR you have not added any!</ion-label>\n   <ion-label class=\"ion-text-wrap\"*ngIf=\"nobooksRESERVED\" style=\"color: green; padding: 20px; font-size: small;\">No one has Reserved your books so far..</ion-label>\n   <ion-label class=\"ion-text-wrap\" *ngIf=\"nobooksBORROWED\" style=\"color: green; padding: 20px; font-size: small;\">No one has Borrowed your books so far..</ion-label>\n\n    <ion-list *ngIf=\"showReserved\" >\n      <ion-item *ngFor=\"let rBook of reservedBooks\">\n        <ion-card>\n          <ion-thumbnail>\n            <img-loader [src]=\"(bookIdImageMap.get(rBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n          </ion-thumbnail>\n        </ion-card>\n        <ion-label class=\"ion-text-wrap\">\n              <strong>{{rBook.bookname}}</strong>\n              <h3> in {{rBook.booklanguage}}. By - {{rBook.bookauthor}}.</h3>\n              <h3 *ngIf=\"rBook.bookcurrentstatus == 'available' \" style=\"color: green;\">{{rBook.bookcurrentstatus}}</h3>\n              <h3 *ngIf=\"rBook.bookcurrentstatus == 'borrowed' \" style=\"color: red;\">{{rBook.bookcurrentstatus}}</h3>\n              <h3 *ngIf=\"rBook.bookcurrentstatus == 'reserved' \" style=\"color: orange;\">{{rBook.bookcurrentstatus}}\n              <span style=\"font-size: small; color: darkgray;\"> by : {{rBook.bookcurrentuser}}</span>\n              </h3> \n              <ion-button shape=\"round\" style=\"color:darkslategray\" (click)=\"presentActionSheet(rBook._id, rBook.bookname, rBook.bookcurrentstatus )\">Take Action..</ion-button>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n<!--<ion-item-sliding *ngFor=\"let rBook of reservedBooks\">\n  <ion-item *ngIf=\"showReserved\">\n    <ion-card>\n      <ion-thumbnail>\n        <img-loader [src]=\"(bookIdImageMap.get(rBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n      </ion-thumbnail>\n    </ion-card>\n    <ion-label class=\"ion-text-wrap\">\n          <strong>{{rBook.bookname}}</strong>\n          <h3> in {{rBook.booklanguage}}. By - {{rBook.bookauthor}}.</h3>\n          <h3 *ngIf=\"rBook.bookcurrentstatus == 'available' \" style=\"color: green;\">{{rBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"rBook.bookcurrentstatus == 'borrowed' \" style=\"color: red;\">{{rBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"rBook.bookcurrentstatus == 'reserved' \" style=\"color: orange;\">{{rBook.bookcurrentstatus}}\n          <span style=\"font-size: small; color: darkgray;\"> by : {{rBook.bookcurrentuser}}</span>\n          </h3> \n      </ion-label>\n  </ion-item>\n  <ion-item-options *ngIf=\"showReserved\" side=\"start\">\n    <ion-item-option >\n      <ion-icon style=\"color: red;\" *ngIf=\"rBook.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n      (click)=\"checkDeleteConfirmation(rBook._id)\"></ion-icon>\n    </ion-item-option>\n  </ion-item-options>\n  <ion-item-options *ngIf=\"showReserved\" side=\"end\">\n    <ion-item-option>\n      <ion-icon style=\"color: blue\" *ngIf=\"(rBook.isReserved || rBook.isBorrowed) && !rBook.isAvailable\" slot=\"icon-only\"\n      src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(rBook._id)\"></ion-icon>\n    </ion-item-option>\n    <ion-item-option>\n      <ion-label style=\"color: darkgreen\" (click)=\"arBookModal(rBook._id, rBook.bookname)\">AR</ion-label>\n    </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>-->\n\n<ion-list *ngIf=\"showAvailable\" >\n  <ion-item *ngFor=\"let aBook of availableBooks\">\n    <ion-card>\n      <ion-thumbnail>\n        <img-loader [src]=\"(bookIdImageMap.get(aBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n      </ion-thumbnail>\n    </ion-card>\n    <ion-label class=\"ion-text-wrap\">\n          <strong>{{aBook.bookname}}</strong>\n          <h3> in {{aBook.booklanguage}}. By - {{aBook.bookauthor}}.</h3>\n          <h3 *ngIf=\"aBook.bookcurrentstatus == 'available' \" style=\"color: green;\">{{aBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"aBook.bookcurrentstatus == 'borrowed' \" style=\"color: red;\">{{aBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"aBook.bookcurrentstatus == 'reserved' \" style=\"color: orange;\">{{aBook.bookcurrentstatus}}\n          <span style=\"font-size: small; color: darkgray;\"> by : {{aBook.bookcurrentuser}}</span>\n          </h3> \n          <ion-button shape=\"round\" style=\"color:darkslategray\" (click)=\"presentActionSheet(aBook._id, aBook.bookname, aBook.bookcurrentstatus )\">Take Action..</ion-button>\n    </ion-label>\n  </ion-item>\n</ion-list>\n  \n<!--<ion-item-sliding *ngFor=\"let aBook of availableBooks \">\n  <ion-item *ngIf=\"showAvailable\">\n    <ion-card *ngIf=\"showAvailable\">\n     <ion-thumbnail *ngIf=\"showAvailable\">\n       <img-loader [src]=\"(bookIdImageMap.get(aBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n     </ion-thumbnail>\n    </ion-card>\n    <ion-label *ngIf=\"showAvailable\" class=\"ion-text-wrap\">\n         <strong>{{aBook.bookname}}</strong>\n         <h3> in {{aBook.booklanguage}}. By - {{aBook.bookauthor}}.</h3>\n         <h3 *ngIf=\"aBook.bookcurrentstatus == 'available' \" style=\"color: green;\">{{aBook.bookcurrentstatus}}</h3>\n           <h3 *ngIf=\"aBook.bookcurrentstatus == 'borrowed' \" style=\"color: red;\">{{aBook.bookcurrentstatus}}</h3>\n           <h3 *ngIf=\"aBook.bookcurrentstatus == 'reserved' \" style=\"color: orange;\">{{aBook.bookcurrentstatus}}</h3>\n    </ion-label>\n  </ion-item>\n  <ion-item-options *ngIf=\"showAvailable\" side=\"start\">\n    <ion-item-option>\n      <ion-icon style=\"color: red\" *ngIf=\"aBook.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n      (click)=\"checkDeleteConfirmation(aBook._id)\"></ion-icon>\n    </ion-item-option>\n  </ion-item-options>\n  <ion-item-options *ngIf=\"showAvailable\" side=\"end\">\n  <ion-item-option>\n    <ion-icon style=\"color: blue\" *ngIf=\"(aBook.isReserved || aBook.isBorrowed) && !aBook.isAvailable\" slot=\"icon-only\"\n    src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(aBook._id)\"></ion-icon>\n  </ion-item-option>   \n  <ion-item-option>\n    <ion-label style=\"color: darkgreen\" (click)=\"arBookModal(aBook._id, aBook.bookname)\">AR</ion-label>\n  </ion-item-option> \n  </ion-item-options>\n</ion-item-sliding>-->\n\n<ion-list *ngIf=\"showBorrowed\" >\n  <ion-item *ngFor=\"let bBook of borrowedBooks\">\n    <ion-card>\n      <ion-thumbnail>\n        <img-loader [src]=\"(bookIdImageMap.get(bBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n      </ion-thumbnail>\n    </ion-card>\n    <ion-label class=\"ion-text-wrap\">\n          <strong>{{bBook.bookname}}</strong>\n          <h3> in {{bBook.booklanguage}}. By - {{bBook.bookauthor}}.</h3>\n          <h3 *ngIf=\"bBook.bookcurrentstatus == 'available' \" style=\"color: green;\">{{bBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"bBook.bookcurrentstatus == 'borrowed' \" style=\"color: red;\">{{bBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"bBook.bookcurrentstatus == 'reserved' \" style=\"color: orange;\">{{bBook.bookcurrentstatus}}\n          <span style=\"font-size: small; color: darkgray;\"> by : {{bBook.bookcurrentuser}}</span>\n          </h3> \n          <ion-button shape=\"round\" style=\"color:darkslategray\" (click)=\"presentActionSheet(bBook._id, bBook.bookname, bBook.bookcurrentstatus )\">Take Action..</ion-button>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<!--<ion-item-sliding *ngFor=\"let bBook of borrowedBooks\">\n  <ion-item *ngIf=\"showBorrowed\">\n    <ion-card *ngIf=\"showBorrowed\">\n     <ion-thumbnail *ngIf=\"showBorrowed\">\n       <img-loader [src]=\"(bookIdImageMap.get(bBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n     </ion-thumbnail>\n    </ion-card>\n    <ion-label *ngIf=\"showBorrowed\" class=\"ion-text-wrap\">\n         <strong>{{bBook.bookname}}</strong>\n         <h3> in {{bBook.booklanguage}}. By - {{bBook.bookauthor}}.</h3>\n         <h3 *ngIf=\"bBook.bookcurrentstatus == 'available' \" style=\"color: green; \">{{bBook.bookcurrentstatus}}</h3>\n         <h3 *ngIf=\"bBook.bookcurrentstatus == 'borrowed' \" style=\"color: red; \">{{bBook.bookcurrentstatus}}\n          <span style=\"font-size: small; color: darkgray;\"> by : {{bBook.bookcurrentuser}}</span>\n        </h3>\n          <h3 *ngIf=\"bBook.bookcurrentstatus == 'reserved' \" style=\"color: orange; \">{{bBook.bookcurrentstatus}}</h3>\n     </ion-label>\n  </ion-item>\n <ion-item-options *ngIf=\"showBorrowed\" side=\"start\">\n   <ion-item-option>\n     <ion-icon style=\"color: red\" *ngIf=\"bBook.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n     (click)=\"checkDeleteConfirmation(bBook._id)\"></ion-icon>\n   </ion-item-option>\n  </ion-item-options>\n  <ion-item-options *ngIf=\"showBorrowed\" side=\"end\">\n      <ion-item-option>\n        <ion-icon style=\"color: blue\" *ngIf=\"(bBook.isReserved || bBook.isBorrowed) && !bBook.isAvailable\" slot=\"icon-only\"\n        src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(bBook._id)\"></ion-icon>\n      </ion-item-option>\n      <ion-item-option>\n        <ion-label style=\"color: darkgreen\" (click)=\"arBookModal(bBook._id, bBook.bookname)\">AR</ion-label>\n      </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>-->\n\n\n<ion-button shape=\"round\" margin-top expand=\"block\">\n  <ion-icon style=\"color: olivedrab \" src=\"../assets/icon/book.svg\"></ion-icon>\n  <span style=\"color:  olivedrab; margin-left: 5px; \" class=\"ion-text-left\">My books - as Book Requester </span>\n</ion-button>\n\n<ion-select *ngIf=\"!nobooksREQUESTEDRESERVEDBORROWED\" (ionChange)=\"displayRequestedBooksByStatus($event)\" interface=\"popover\" placeholder=\"Select current status...\">\n  <ion-select-option *ngFor=\"let status of bookrequestedstatus\" [value]=\"status\"> {{status}}</ion-select-option>\n</ion-select>\n\n<ion-label *ngIf=\"nobooksREQUESTEDRESERVEDBORROWED\" style=\"color: green; padding: 20px; font-size: small;\">\n  You have not reserved or borrowed any books so far</ion-label>\n<ion-label *ngIf=\"nobooksREQUESTEDRESERVED\" style=\"color: green; padding: 20px; font-size: small;\">\n  You haven't reserved any books yet</ion-label>\n<ion-label *ngIf=\"nobooksREQUESTEDBORROWED\" style=\"color: green; padding: 20px; font-size: small;\">\n  You haven't borrowed any books yet</ion-label>\n\n\n<ion-list *ngIf=\"showRequestedReservedBooks\" >\n  <ion-item *ngFor=\"let rRbook of requestedReservedBooks\">\n    <ion-card>\n      <ion-thumbnail>\n        <img-loader [src]=\"(bookIdImageMap.get(rRbook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n      </ion-thumbnail>\n    </ion-card>\n    <ion-label class=\"ion-text-wrap\">\n      <strong>{{rRbook.bookname}}</strong>\n      <h3> in {{rRbook.booklanguage}}. By - {{rRbook.bookauthor}}</h3>\n      <h3 *ngIf=\"rRbook.bookcurrentstatus == 'reserved' \" style=\"color: orange; \">{{rRbook.bookcurrentstatus}}</h3>\n      <h3 *ngIf=\"rRbook.bookcurrentstatus == 'borrowed' \" style=\"color: red; \">{{rRbook.bookcurrentstatus}}</h3>\n     \n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf=\"showRequestedBorrowedBooks\" >\n  <ion-item *ngFor=\"let rBbook of requestedBorrowedBooks\">\n    <ion-card>\n      <ion-thumbnail>\n        <img-loader [src]=\"(bookIdImageMap.get(rBbook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n      </ion-thumbnail>\n    </ion-card>\n    <ion-label class=\"ion-text-wrap\">\n      <strong>{{rBbook.bookname}}</strong>\n      <h3> in {{rBbook.booklanguage}}. By - {{rBbook.bookauthor}}</h3>\n      <h3 *ngIf=\"rBbook.bookcurrentstatus == 'reserved' \" style=\"color: orange; \">{{rBbook.bookcurrentstatus}}</h3>\n      <h3 *ngIf=\"rBbook.bookcurrentstatus == 'borrowed' \" style=\"color: red; \">{{rBbook.bookcurrentstatus}}</h3>\n      <h3 *ngIf=\"rBbook.bookcurrentstatus == 'borrowed' \" style=\"font-size: small;\">  Return by : {{rBbook.bookreturnbydate}}</h3> \n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<!--<ion-list *ngIf=\"!nobooksRESERVEDBORROWED\">\n  <ion-item *ngFor=\"let nBook of notMyBooks\">\n    <ion-card>\n      <ion-thumbnail>\n        <img-loader [src]=\"(notMyBookIdImageMap.get(nBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n      </ion-thumbnail>\n      </ion-card>\n      <ion-label class=\"ion-text-wrap\">\n          <h3>{{nBook.bookname}}</h3>\n          <h3> in {{nBook.booklanguage}}. By - {{nBook.bookauthor}}</h3>\n          <h3 *ngIf=\"nBook.bookcurrentstatus == 'reserved' \" style=\"color: orange; \">{{nBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"nBook.bookcurrentstatus == 'borrowed' \" style=\"color: red; \">{{nBook.bookcurrentstatus}}</h3>\n          <h3 *ngIf=\"nBook.bookcurrentstatus == 'borrowed' \" style=\"font-size: small; color:orangered\">  Return by : {{nBook.bookreturnbydate}}</h3>\n      </ion-label>\n  </ion-item>\n</ion-list>-->\n\n\n\n<!--<ion-button shape=\"round\" margin-top expand=\"block\">\n  <ion-icon style=\"color: #145A32; \" src=\"../assets/icon/book.svg\"></ion-icon>\n  <span style=\"color: #145A32 ; margin-left: 5px; \" class=\"ion-text-left\">All my books</span>\n</ion-button>\n\n    <ion-item-sliding *ngFor=\"let book of allBooks \">\n         <ion-item>\n           <ion-card>\n            <ion-thumbnail>\n              <img-loader [src]=\"(bookIdImageMap.get(book._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n            </ion-thumbnail>\n           </ion-card>\n           <ion-label class=\"ion-text-wrap\">\n                <strong>{{book.bookname}}</strong>\n                <h3> in {{book.booklanguage}}. By - {{book.bookauthor}}.</h3>\n                <h3 *ngIf=\"book.bookcurrentstatus == 'available' \" style=\"color: green; \">{{book.bookcurrentstatus}}</h3>\n                <h3 *ngIf=\"book.bookcurrentstatus == 'borrowed' \" style=\"color: red; \">{{book.bookcurrentstatus}}</h3>\n                <h3 *ngIf=\"book.bookcurrentstatus == 'reserved' \" style=\"color: orange; \">{{book.bookcurrentstatus}}</h3>      \n            </ion-label>\n         </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option style=\"border-color: darkgreen;\">\n            <ion-icon style=\"color: red\" *ngIf=\"book.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n            (click)=\"checkDeleteConfirmation(book._id)\"></ion-icon>\n          </ion-item-option>\n       </ion-item-options>\n       <ion-item-options side=\"end\">\n        <ion-item-option>\n          <ion-icon style=\"color: blue\" *ngIf=\"(book.isReserved || book.isBorrowed) && !book.isAvailable\" slot=\"icon-only\"\n          src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(book._id)\"></ion-icon>\n         <ion-item-option>\n            <ion-label style=\"color: darkgreen\" (click)=\"arBookModal(book._id, book.bookname)\">AR</ion-label>\n          </ion-item-option>\n        </ion-item-option>    \n      </ion-item-options>\n    </ion-item-sliding>-->\n\n\n   \n\n  <!--</ion-list>-->\n  <!--<ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>-->\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  width: 200px;\n  height: 200px;\n  border: gray solid 1px;\n  margin: 10px auto; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.display_heading {\n  margin: 10px auto;\n  padding: 10px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-card {\n  margin: 5px;\n  padding: 10px; }\n\n.book-image {\n  border: gray solid 1px;\n  margin: 5px; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px;\n  background-color: whitesmoke; }\n\n.displayinnercard {\n  margin-top: auto;\n  margin-left: 30px;\n  padding: 5px;\n  background-color: ghostwhite; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\nion-button {\n  --background: #E9F7EF; }\n\nion-button span {\n    text-align: center; }\n\nion-toolbar {\n  --background: #145A32; }\n\nion-item-option {\n  --background: white; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nspan.ion-text-left {\n  margin-right: auto; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZjtFQUlJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBR0ksc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHZjtFQUlHLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCLEVBQUE7O0FBRzlCO0VBSUcsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNEJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFhLEVBQUE7O0FBRGY7SUFJRyxrQkFBaUIsRUFBQTs7QUFLcEI7RUFFRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0UsbUJBQWEsRUFBQTs7QUFJZjtFQUVFLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWE7RUFDYixxQkFBZ0I7RUFFaEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByb2ZpbGUtcGljIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGlzcGxheV9oZWFkaW5nIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib29rLWNhcmQge1xuXG4gICAgLy9oZWlnaHQ6NTBweDtcbiAgICAvL2JvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJvb2staW1hZ2Uge1xuICAgIC8vd2lkdGg6IDMwMHB4O1xuICAgIC8vaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uZGlzcGxheWNhcmQge1xuICAvLyB3aWR0aDogMzB2dztcbiAgIC8vaGVpZ2h0OjMwdmg7XG4gIC8vIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICBtYXJnaW46IDVweDtcbiAgIHBhZGRpbmc6IDVweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gfVxuIFxuIC5kaXNwbGF5aW5uZXJjYXJkIHtcbiAgIC8vIHdpZHRoOiAzMHZ3O1xuICAgIC8vaGVpZ2h0OjMwdmg7XG4gICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6Z2hvc3R3aGl0ZTtcbiAgfVxuXG4gIC5kaXNwbGF5X2hlYWRpbmcge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRTlGN0VGO1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjRkRGRUZFO1xuICAgIHNwYW57XG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgXG4gICAgfVxuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vQGF0LXJvb3Q6ICMxQjRGNzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xuICB9XG5cbiAgaW9uLWl0ZW0tb3B0aW9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgXG4gIH1cblxuICBpb24tbGlzdC1oZWFkZXIge1xuXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxuICB9XG5cbiAgc3Bhbi5pb24tdGV4dC1sZWZ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5teS1jdXN0b20tY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG4gIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcblxuICBjb2xvcjogI2ZmZjtcbn1cblxuXG5cblxuIFxuIl19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _shared_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/feedback */ "./src/app/shared/feedback.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");
/* harmony import */ var _services_available_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/available.service */ "./src/app/services/available.service.ts");
/* harmony import */ var _services_reserved_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/reserved.service */ "./src/app/services/reserved.service.ts");
/* harmony import */ var _services_borrowed_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/borrowed.service */ "./src/app/services/borrowed.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _services_searchmybooks_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/searchmybooks.service */ "./src/app/services/searchmybooks.service.ts");
/* harmony import */ var _addbook_addbook_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../addbook/addbook.page */ "./src/app/addbook/addbook.page.ts");
/* harmony import */ var _arbook_arbook_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../arbook/arbook.page */ "./src/app/arbook/arbook.page.ts");
/* harmony import */ var _managebookshelp_managebookshelp_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../managebookshelp/managebookshelp.page */ "./src/app/managebookshelp/managebookshelp.page.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");


























var CodeOps;
(function (CodeOps) {
    CodeOps[CodeOps["getQrCode"] = 0] = "getQrCode";
    CodeOps[CodeOps["getScannedCode"] = 1] = "getScannedCode";
    CodeOps[CodeOps["compareCodes"] = 2] = "compareCodes";
})(CodeOps || (CodeOps = {}));
var Tab3Page = /** @class */ (function () {
    function Tab3Page(_camera, _alertController, _modalController, authService, navCtrl, readarsService, baseURL, router, route, searchedMyData, fb, feedbackservice, booksService, reservedService, borrowedService, availableService, activatedRoute, barCodeScanner, imageLoaderService, toastCtrl, loadingController, actionSheetController) {
        this._camera = _camera;
        this._alertController = _alertController;
        this._modalController = _modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.readarsService = readarsService;
        this.baseURL = baseURL;
        this.router = router;
        this.route = route;
        this.searchedMyData = searchedMyData;
        this.fb = fb;
        this.feedbackservice = feedbackservice;
        this.booksService = booksService;
        this.reservedService = reservedService;
        this.borrowedService = borrowedService;
        this.availableService = availableService;
        this.activatedRoute = activatedRoute;
        this.barCodeScanner = barCodeScanner;
        this.imageLoaderService = imageLoaderService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.username = undefined;
        this.books = [];
        this.books1 = [];
        this.reservedBooks = [];
        this.availableBooks = [];
        this.borrowedBooks = [];
        this.requestedReservedBooks = [];
        this.requestedBorrowedBooks = [];
        this.searchTerm = "";
        this.descending = false;
        this.column = 'booklanguage';
        this.bookIdsImages = new Map();
        this.bookIdImageMap = new Map();
        this.notMyBookIdImageMap = new Map();
        this.name = 'Angular';
        this.currentRouter = this.router.url;
        this.booklanguage = _shared_book__WEBPACK_IMPORTED_MODULE_7__["BookLanguage"];
        this.bookactions = _shared_book__WEBPACK_IMPORTED_MODULE_7__["BookActions"];
        this.bookcurrentstatus = _shared_book__WEBPACK_IMPORTED_MODULE_7__["BookCurrentStatus"];
        this.bookrequestedstatus = _shared_book__WEBPACK_IMPORTED_MODULE_7__["BookRequestedStatus"];
        //feedback: Feedback;
        this.contactType = _shared_feedback__WEBPACK_IMPORTED_MODULE_8__["ContactType"];
        this.submitted = null;
        this.showForm = true;
        this.showAvailable = false;
        this.showReserved = false;
        this.showBorrowed = false;
        this.showAll = false;
        this.showNotMyBooks = false;
        this.showRequestedReservedBooks = false;
        this.showRequestedBorrowedBooks = false;
        this.noBorrowedReservedExists = false;
        this.panelOpenState = false;
        this.nobooksEXIST = false;
        this.nobooksREQUESTEDRESERVEDBORROWED = true;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ;
    Tab3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.setFilteredItems();
        //this.presentLoading();
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(function (name) {
            console.log(name);
            _this.username = name;
            //  if (name) {
            _this.booksService.getBooks()
                .subscribe(function (books) {
                _this.allBooks = books;
                _this.prepareBookIdsImagesMap();
                console.log("TAB3 BOOKS", _this.allBooks);
                if (_this.allBooks.length == 0 || _this.allBooks === undefined) {
                    _this.nobooksEXIST = true;
                }
                else {
                    _this.nobooksEXIST = false;
                }
                //this.getBooksBoorowedOrReservedByMe();
            }, function (errmess) {
                _this.errMess = errmess;
            });
            //   }
            _this.readarsService.getBooks()
                .subscribe(function (books1) {
                _this.allBooks1 = books1;
                console.log("allbooks1", _this.allBooks1);
                for (var i = 0; i < _this.allBooks1.length; i++) {
                    console.log("Book Current user", _this.allBooks1[i].bookcurrentuser);
                    console.log("this.username", _this.username);
                    if (_this.allBooks1[i].bookcurrentuser === _this.username) {
                        _this.nobooksREQUESTEDRESERVEDBORROWED = false;
                        console.log(" this.nobooksREQUESTEDRESERVEDBORROWED", _this.nobooksREQUESTEDRESERVEDBORROWED);
                    }
                }
            });
        });
    };
    Tab3Page.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Loading...please wait',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.booksService.getBooks()
            .subscribe(function (books) {
            _this.allBooks = books;
            _this.prepareBookIdsImagesMap();
            if (_this.allBooks.length == 0 || _this.allBooks === undefined) {
                _this.nobooksEXIST = true;
            }
            else {
                _this.nobooksEXIST = false;
            }
            console.log("TAB3 BOOKS", _this.allBooks);
        }, function (errmess) {
            _this.errMess = errmess;
        });
    };
    /*getBooksBoorowedOrReservedByMe() {
  
      this.nobooksREQUESTEDRESERVEDBORROWED = false;
      this.readarsService.getBooks()
      .subscribe(booksAll => {
        console.log("booksALL", booksAll);
        for (let i=0; i<booksAll.length;i++) {
          //console.log("Book Current user", booksAll[i].bookcurrentuser)
          //console.log("this.username", this.username)
          if (booksAll[i].bookcurrentuser === this.username) {
            
            this.notMyBooks.push(booksAll[i]);
            console.log("FOUND books current user", booksAll[i].bookcurrentuser);
            this.booksService.getBookImage(booksAll[i]._id)
            .subscribe(x => {
                this.url = x;
                console.log("this.url", this.url);
                this.notMyBookIdImageMap.set(booksAll[i]._id, this.url);
                console.log("notMyBookIdImageMap", this.notMyBookIdImageMap);
             }, errMess => {
              console.log(errMess)
            });
            
          }
        }
        console.log("NOT MY BOOKS", this.notMyBooks)
        if (this.notMyBooks === undefined || this.notMyBooks.length == 0) {
          this.nobooksREQUESTEDRESERVEDBORROWED = true;
        }
      }, errmess => {
        this.errMess = <any>errmess
       
      });
    }*/
    Tab3Page.prototype.displayBooksByStatus = function (event) {
        console.log("inside displayBooksBYStatus function");
        this.showAvailable = false;
        this.showReserved = false;
        this.showBorrowed = false;
        this.showAll = false;
        this.nobooksAVAILABLE = false;
        this.nobooksBORROWED = false;
        this.nobooksRESERVED = false;
        if (event.detail.value === 'Available') {
            console.log("inside AVAILABLE condition");
            this.showAvailable = true;
            this.showBorrowed = false;
            this.showReserved = false;
            this.availableBooks = [];
            var i = 0;
            var j = 0;
            while (i < this.allBooks.length) {
                if (this.allBooks[i].bookcurrentstatus === 'available') {
                    this.availableBooks[j] = this.allBooks[i];
                    j++;
                }
                i++;
            }
            if (this.availableBooks === undefined || this.availableBooks.length == 0) {
                //this.presentToast(event.detail.value + " - None exists");
                this.nobooksAVAILABLE = true;
                this.nobooksBORROWED = false;
                this.nobooksRESERVED = false;
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.availableBooks.length);
        }
        if (event.detail.value === 'Reserved') {
            console.log("inside RESERVED condition");
            this.showReserved = true;
            this.showAvailable = false;
            this.showBorrowed = false;
            this.reservedBooks = [];
            var i = 0;
            var j = 0;
            while (i < this.allBooks.length) {
                if (this.allBooks[i].bookcurrentstatus === 'reserved') {
                    this.reservedBooks[j] = this.allBooks[i];
                    j++;
                }
                i++;
            }
            if (this.reservedBooks === undefined || this.reservedBooks.length == 0) {
                //this.presentToast(event.detail.value + " - None exists");
                this.nobooksRESERVED = true;
                this.nobooksAVAILABLE = false;
                this.nobooksBORROWED = false;
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.reservedBooks.length);
        }
        if (event.detail.value === 'Borrowed') {
            console.log("inside BORROWED condition");
            this.showBorrowed = true;
            this.showAvailable = false;
            this.showReserved = false;
            this.borrowedBooks = [];
            var i = 0;
            var j = 0;
            while (i < this.allBooks.length) {
                if (this.allBooks[i].bookcurrentstatus === 'borrowed') {
                    this.borrowedBooks[j] = this.allBooks[i];
                    j++;
                }
                i++;
            }
            if (this.borrowedBooks === undefined || this.borrowedBooks.length == 0) {
                //this.presentToast(event.detail.value + " - None exists");
                this.nobooksBORROWED = true;
                this.nobooksRESERVED = false;
                this.nobooksAVAILABLE = false;
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.borrowedBooks.length);
        }
        if (event.detail.value === 'All') {
            this.showAll = true;
        }
    };
    Tab3Page.prototype.displayRequestedBooksByStatus = function (event) {
        var _this = this;
        this.notMyBooks = [];
        // this.nobooksREQUESTEDRESERVEDBORROWED = false;
        this.readarsService.getBooks()
            .subscribe(function (booksAll) {
            console.log("booksALL", booksAll);
            var _loop_1 = function (i) {
                //console.log("Book Current user", booksAll[i].bookcurrentuser)
                //console.log("this.username", this.username)
                if (booksAll[i].bookcurrentuser === _this.username) {
                    _this.notMyBooks.push(booksAll[i]);
                    console.log("FOUND books current user", booksAll[i].bookcurrentuser);
                    _this.booksService.getBookImage(booksAll[i]._id)
                        .subscribe(function (x) {
                        _this.url = x;
                        console.log("this.url", _this.url);
                        _this.notMyBookIdImageMap.set(booksAll[i]._id, _this.url);
                        console.log("notMyBookIdImageMap", _this.notMyBookIdImageMap);
                    }, function (errMess) {
                        console.log(errMess);
                    });
                }
            };
            for (var i = 0; i < booksAll.length; i++) {
                _loop_1(i);
            }
            console.log("NOT MY BOOKS", _this.notMyBooks);
            if (_this.notMyBooks === undefined || _this.notMyBooks.length == 0) {
                _this.nobooksREQUESTEDRESERVEDBORROWED = true;
            }
            else {
                console.log("inside displayRequestedBooksByStatus function");
                _this.showRequestedBorrowedBooks = false;
                _this.showRequestedReservedBooks = false;
                _this.nobooksREQUESTEDRESERVEDBORROWED = false;
                console.log("NOT MY BOOKS", _this.notMyBooks);
                if (event.detail.value === 'Reserved') {
                    console.log("inside REQUESTED RESERVED condition");
                    _this.showRequestedReservedBooks = true;
                    _this.showRequestedBorrowedBooks = false;
                    _this.requestedReservedBooks = [];
                    var i = 0;
                    var j = 0;
                    while (i < _this.notMyBooks.length) {
                        if (_this.notMyBooks[i].bookcurrentstatus === 'reserved') {
                            _this.requestedReservedBooks[j] = _this.notMyBooks[i];
                            j++;
                        }
                        i++;
                    }
                    if (_this.requestedReservedBooks === undefined) {
                        _this.nobooksREQUESTEDRESERVED = true;
                        _this.nobooksREQUESTEDBORROWED = false;
                    }
                    console.log("BOOK Status & COLLECTION", event.detail.value, _this.requestedReservedBooks.length);
                }
                if (event.detail.value === 'Borrowed') {
                    console.log("inside BORROWED condition");
                    _this.showRequestedReservedBooks = false;
                    _this.showRequestedBorrowedBooks = true;
                    _this.requestedBorrowedBooks = [];
                    var i = 0;
                    var j = 0;
                    while (i < _this.notMyBooks.length) {
                        if (_this.notMyBooks[i].bookcurrentstatus === 'borrowed') {
                            _this.requestedBorrowedBooks[j] = _this.notMyBooks[i];
                            j++;
                        }
                        i++;
                    }
                    if (_this.requestedBorrowedBooks === undefined) {
                        _this.nobooksREQUESTEDBORROWED = true;
                        _this.nobooksREQUESTEDRESERVED = false;
                    }
                    console.log("BOOK Status & COLLECTION", event.detail.value, _this.requestedBorrowedBooks.length);
                }
            }
        }, function (errmess) {
            _this.errMess = errmess;
        });
        /*console.log("inside displayRequestedBooksByStatus function");
        this.showRequestedBorrowedBooks = false;
        this.showRequestedReservedBooks = false;
        
        console.log("NOT MY BOOKS", this.notMyBooks)
        if (event.detail.value === 'Reserved') {
          console.log("inside REQUESTED RESERVED condition");
          this.showRequestedReservedBooks= true;
          this.showRequestedBorrowedBooks = false;
          this.requestedReservedBooks = [];
          let i = 0;
          let j = 0;
          while (i < this.notMyBooks.length) {
            
            if (this.notMyBooks[i].bookcurrentstatus === 'reserved') {
              this.requestedReservedBooks[j] = this.notMyBooks[i];
              j++;
            }
            i++;
          }
          if (this.requestedReservedBooks === undefined) {
            this.nobooksREQUESTEDRESERVED = true;
            this.nobooksREQUESTEDBORROWED = false;
          }
          console.log("BOOK Status & COLLECTION", event.detail.value, this.requestedReservedBooks.length)
        }
    
        if (event.detail.value === 'Borrowed') {
          console.log("inside BORROWED condition");
          this.showRequestedReservedBooks= false;
          this.showRequestedBorrowedBooks = true;
          this.requestedBorrowedBooks = [];
          let i = 0;
          let j = 0;
          while (i < this.notMyBooks.length) {
            
            if (this.notMyBooks[i].bookcurrentstatus === 'borrowed') {
              this.requestedBorrowedBooks[j] = this.notMyBooks[i];
              j++;
            }
            i++;
          }
          if (this.requestedBorrowedBooks === undefined) {
            this.nobooksREQUESTEDBORROWED = true;
            this.nobooksREQUESTEDRESERVED = false;
            
          }
          console.log("BOOK Status & COLLECTION", event.detail.value, this.requestedBorrowedBooks.length)
         
        }*/
    };
    Tab3Page.prototype.presentToast = function (errmsg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: errmsg,
                            duration: 3000,
                            position: 'middle'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        //refresher.complete();
    };
    Tab3Page.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    Tab3Page.prototype.prepareBookIdsImagesMap = function () {
        // get all the  bookIds
        // for every  bookID get the corresponding imageURL
        // store image URL against the bookID in a map
        // when displaying a view, for every book Id(key), get corresponding img url(value) from the map
        var _this = this;
        this.booksService.getBookIds().subscribe(function (bookIds) {
            _this.bookIds = bookIds;
            _this.storeBookIds(_this.bookIds);
            _this.lbookIds = _this.loadBookIds();
            var _loop_2 = function (i) {
                _this.booksService.getBookImage(_this.lbookIds[i])
                    .subscribe(function (x) {
                    _this.url = x;
                    console.log("this.url", _this.url);
                    _this.bookIdImageMap.set(_this.lbookIds[i], _this.url);
                    console.log("book image map", _this.bookIdImageMap);
                }, function (errMess) {
                    console.log(errMess);
                });
            };
            for (var i = 0; i < _this.lbookIds.length; i++) {
                _loop_2(i);
            }
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab3Page.prototype.storeBookIds = function (bookIds) {
        // console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    Tab3Page.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    Tab3Page.prototype.ngAfterViewInit = function () {
    };
    Tab3Page.prototype.refreshBookList = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.booksService.getBooks()
                .subscribe(function (books) {
                _this.books = books;
            }, function (errmess) {
                _this.errMess = errmess;
            });
            _this.clearCache();
            event.target.complete();
        }, 2000);
    };
    Tab3Page.prototype.setFilteredItems = function () {
        this.books = this.searchedMyData.filterItems(this.searchTerm);
        console.log("Searched my data", this.books);
    };
    Tab3Page.prototype.deleteBook = function (id) {
        var _this = this;
        console.log('Deleting Book ' + id);
        this.booksService.deleteBook(id)
            .subscribe(function (removebook) {
            _this.removebook = removebook;
            _this.ngOnInit();
        }, function (errmess) {
            _this.errMess = errmess;
        });
        this.booksService.deleteBookImage(id)
            .subscribe(function (resp) { return console.log(resp); }, function (errmess) { return _this.errMess = errmess; });
        this.presentToast("Book removed successfully");
        this.bookDeleted = true;
        //this.ngOnInit();
    };
    Tab3Page.prototype.getCodeValue = function (codeOpsName) {
        if (codeOpsName === 'xyz') {
            return CodeOps.getQrCode;
        }
        if (codeOpsName === 'abc') {
            return CodeOps.getScannedCode;
        }
    };
    Tab3Page.prototype.checkDeleteConfirmation = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            // header: "All associated content will also be removed ",
                            message: "All associated content will also be removed",
                            header: "Do you wish to proceed ?",
                            buttons: [
                                {
                                    text: "Yes",
                                    handler: function () {
                                        _this.deleteBook(id);
                                        _this.ngOnInit();
                                    }
                                },
                                {
                                    text: "No",
                                    handler: function () {
                                        return;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.alerManagement = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, role;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            message: message,
                            header: "Please Note",
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        role = (_a.sent()).role;
                        console.log('onDidDismiss resolved with role', role);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.scanToLendOrRelease = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: "Choose your action",
                            message: "Lend or Make Book Available",
                            buttons: [
                                {
                                    text: "Lend",
                                    handler: function () {
                                        _this.scanForLend(id);
                                    }
                                },
                                {
                                    text: "Make Available",
                                    handler: function () {
                                        _this.scanForRelease(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.getQRCheckString = function (id) {
        //this.ngOnInit();
        console.log("INSIDE GET CHECK QR STRING");
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i]._id === id) {
                this.qrCheckString = this.books[i]._id +
                    this.books[i].bookowner.username +
                    this.books[i].bookcurrentuser;
                console.log("QR CHECK STRING", this.qrCheckString);
                return this.qrCheckString;
            }
            //break;
        }
    };
    Tab3Page.prototype.scanForLend = function (id) {
        var _this = this;
        console.log("INSIDE LEND");
        this.booksService.getBook(id)
            .subscribe(function (book) {
            _this.bookcurrentUsername = book.bookcurrentuser;
            _this.qrCheckString = book._id +
                book.bookowner.username +
                book.bookcurrentuser;
            console.log("QR CHECK STRING IS", _this.qrCheckString);
            var options = {
                preferFrontCamera: false,
                showFlipCameraButton: true,
                showTorchButton: true,
                torchOn: false,
                prompt: 'Place a barcode inside the scan area',
                resultDisplayDuration: 500,
                formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
                orientation: 'portrait',
            };
            _this.barCodeScanner.scan(options).then(function (barcodeData) {
                console.log("CHECK STRING IS ------>", _this.qrCheckString);
                _this.scannedData = barcodeData;
                console.log("SCANNED DATA IS ------> ", _this.scannedData["text"]);
                if (_this.qrCheckString === _this.scannedData["text"]) {
                    console.log("MATCH SUCCESS");
                    console.log('LENDING BOOK ' + id);
                    _this.presentToast("Authorization Successful");
                    _this.router.navigate([_this.currentRouter]);
                    _this.book = book;
                    _this.book.bookavailable = false;
                    _this.book.bookreserved = true;
                    _this.book.bookborrowed = true;
                    _this.book.bookcurrentuser = _this.bookcurrentUsername;
                    _this.book.bookcurrentstatus = 'borrowed';
                    _this.book.bookborroweddate = new Date().toLocaleDateString();
                    /*var returnDate = new Date();
                    returnDate.setDate(returnDate.getDate()+30);
                    this.book.bookreturnbydate = returnDate.toLocaleDateString();*/
                    var nowPlus30Days = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));
                    _this.book.bookreturnbydate = nowPlus30Days.toLocaleDateString();
                    console.log("BOOK BORROWED DATE", _this.book.bookborroweddate);
                    console.log("BOOK RETURN BY DATE", _this.book.bookreturnbydate);
                    _this.booksService.lendBook(id, _this.book)
                        .subscribe(function (book) {
                        console.log(book);
                        _this.borrowed = true;
                        _this.reserved = true;
                        _this.qrCheckString = "";
                        _this.presentToast("Book is in borrowed status");
                        _this.ngOnInit();
                    });
                    //this.ngOnInit();
                }
                else {
                    _this.alerManagement("QR Codes mismatch. Authorization failed");
                    console.log("QR Codes mismatch. Authorization failed");
                }
            })
                .catch(function (err) {
                console.log('Error', err);
            });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab3Page.prototype.scanForRelease = function (id) {
        var _this = this;
        console.log("INSIDE MAKE AVAILABLE");
        this.booksService.getBook(id)
            .subscribe(function (book) {
            _this.bookcurrentUsername = book.bookcurrentuser;
            _this.qrCheckString = book._id +
                book.bookowner.username +
                book.bookcurrentuser;
            console.log("QR CHECK STRING IS", _this.qrCheckString);
            var options = {
                preferFrontCamera: false,
                showFlipCameraButton: true,
                showTorchButton: true,
                torchOn: false,
                prompt: 'Place a barcode inside the scan area',
                resultDisplayDuration: 500,
                formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
                orientation: 'portrait',
            };
            _this.barCodeScanner.scan(options).then(function (barcodeData) {
                console.log("CHECK STRING IS ------>", _this.qrCheckString);
                _this.scannedData = barcodeData;
                console.log("SCANNED DATA IS ------> ", _this.scannedData["text"]);
                if (_this.qrCheckString === _this.scannedData["text"]) {
                    console.log("MATCH SUCCESS");
                    console.log('RELEASING BOOK ' + id);
                    _this.presentToast("Authorization Successful");
                    _this.router.navigate([_this.currentRouter]);
                    //this.book.bookcurrentuser = "";
                    _this.booksService.deleteQRBookImage(id, _this.bookcurrentUsername)
                        .subscribe(function (resp) {
                        console.log(resp);
                        console.log("QR IMAGE DELETED");
                        _this.book = book;
                        _this.book.bookavailable = true;
                        _this.book.bookreserved = false;
                        _this.book.bookborrowed = false;
                        _this.book.bookcurrentuser = "";
                        _this.book.bookcurrentstatus = 'available';
                        _this.book.bookborroweddate = "";
                        _this.book.bookreserveddate = "";
                        _this.book.bookreturnbydate = "";
                        _this.booksService.releaseBook(_this.book._id, _this.book)
                            .subscribe(function (book) {
                            console.log(book);
                            _this.available = true;
                            _this.reserved = false;
                            _this.qrCheckString = "";
                            _this.presentToast("Book is now available");
                        });
                    }, function (errmess) { return _this.errMess = errmess; });
                    _this.ngOnInit();
                }
                else {
                    console.log("QR CODES DON'T MATCH");
                    _this.alerManagement("QR Codes mismatch. Authorization failed");
                }
            })
                .catch(function (err) {
                console.log('Error', err);
            });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab3Page.prototype.presentActionSheet = function (bookid, bookname, bookcurrentstatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet, role;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Actions...',
                            cssClass: 'my-custom-class',
                            buttons: [
                                {
                                    text: 'Lend or Make Available',
                                    icon: "../assets/icon/scan.svg",
                                    handler: function () {
                                        //*ngIf="(book.isReserved || book.isBorrowed) && !book.isAvailable"
                                        if (bookcurrentstatus === 'borrowed' || bookcurrentstatus === 'reserved') {
                                            _this.scanToLendOrRelease(bookid);
                                        }
                                        else {
                                            _this.alerManagement("Book needs to be in 'Borrowed' or 'Reserved' status to perform this action");
                                        }
                                    }
                                }, {
                                    text: 'Enable for AR',
                                    icon: "../assets/icon/scan-circle.svg",
                                    handler: function () {
                                        _this.arBookModal(bookid, bookname);
                                        console.log('AR clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        if (bookcurrentstatus === 'available') {
                                            _this.checkDeleteConfirmation(bookid);
                                        }
                                        else {
                                            _this.alerManagement("Book can be removed only when it is in 'Available' status");
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, actionSheet.onDidDismiss()];
                    case 3:
                        role = (_a.sent()).role;
                        console.log('onDidDismiss resolved with role', role);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.loadMoreBooks = function (event) {
        setTimeout(function () {
            /*  this.bookList = this.books;
              const newBooks = [...this.bookList];
              this.books = this.bookList.concat(newBooks);*/
        }, 3000);
    };
    Tab3Page.prototype.helpModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var helpManageBooksModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _managebookshelp_managebookshelp_page__WEBPACK_IMPORTED_MODULE_19__["ManagebookshelpPage"]
                        })];
                    case 1:
                        helpManageBooksModal = _a.sent();
                        return [2 /*return*/, helpManageBooksModal.present()];
                }
            });
        });
    };
    Tab3Page.prototype.addBookModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var addbookModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _addbook_addbook_page__WEBPACK_IMPORTED_MODULE_17__["AddbookPage"]
                        })];
                    case 1:
                        addbookModal = _a.sent();
                        return [2 /*return*/, addbookModal.present()];
                }
            });
        });
    };
    Tab3Page.prototype.arBookModal = function (id, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var arbookModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _arbook_arbook_page__WEBPACK_IMPORTED_MODULE_18__["ArbookPage"],
                            componentProps: {
                                bookId: id,
                                bookName: name
                            }
                        })];
                    case 1:
                        arbookModal = _a.sent();
                        return [2 /*return*/, arbookModal.present()];
                }
            });
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('baseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_11__["ReadarsService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_searchmybooks_service__WEBPACK_IMPORTED_MODULE_16__["SearchedMyData"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_15__["FeedbackService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_10__["BooksService"],
            _services_reserved_service__WEBPACK_IMPORTED_MODULE_13__["ReservedService"],
            _services_borrowed_service__WEBPACK_IMPORTED_MODULE_14__["BorrowedService"],
            _services_available_service__WEBPACK_IMPORTED_MODULE_12__["AvailableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_20__["ImageLoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map