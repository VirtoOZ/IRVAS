(() => {
    var __webpack_modules__ = {
        599: (module, exports, __webpack_require__) => {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function(factory) {
                "use strict";
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(692) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
                __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            })(function($) {
                "use strict";
                var Slick = window.Slick || {};
                Slick = function() {
                    var instanceUid = 0;
                    function Slick(element, settings) {
                        var dataSettings, _ = this;
                        _.defaults = {
                            accessibility: true,
                            adaptiveHeight: false,
                            appendArrows: $(element),
                            appendDots: $(element),
                            arrows: true,
                            asNavFor: null,
                            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                            autoplay: false,
                            autoplaySpeed: 3e3,
                            centerMode: false,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function(slider, i) {
                                return $('<button type="button" />').text(i + 1);
                            },
                            dots: false,
                            dotsClass: "slick-dots",
                            draggable: true,
                            easing: "linear",
                            edgeFriction: .35,
                            fade: false,
                            focusOnSelect: false,
                            focusOnChange: false,
                            infinite: true,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: false,
                            pauseOnHover: true,
                            pauseOnFocus: true,
                            pauseOnDotsHover: false,
                            respondTo: "window",
                            responsive: null,
                            rows: 1,
                            rtl: false,
                            slide: "",
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 500,
                            swipe: true,
                            swipeToSlide: false,
                            touchMove: true,
                            touchThreshold: 5,
                            useCSS: true,
                            useTransform: true,
                            variableWidth: false,
                            vertical: false,
                            verticalSwiping: false,
                            waitForAnimate: true,
                            zIndex: 1e3
                        };
                        _.initials = {
                            animating: false,
                            dragging: false,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            scrolling: false,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: false,
                            slideOffset: 0,
                            swipeLeft: null,
                            swiping: false,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: false,
                            unslicked: false
                        };
                        $.extend(_, _.initials);
                        _.activeBreakpoint = null;
                        _.animType = null;
                        _.animProp = null;
                        _.breakpoints = [];
                        _.breakpointSettings = [];
                        _.cssTransitions = false;
                        _.focussed = false;
                        _.interrupted = false;
                        _.hidden = "hidden";
                        _.paused = true;
                        _.positionProp = null;
                        _.respondTo = null;
                        _.rowCount = 1;
                        _.shouldClick = true;
                        _.$slider = $(element);
                        _.$slidesCache = null;
                        _.transformType = null;
                        _.transitionType = null;
                        _.visibilityChange = "visibilitychange";
                        _.windowWidth = 0;
                        _.windowTimer = null;
                        dataSettings = $(element).data("slick") || {};
                        _.options = $.extend({}, _.defaults, settings, dataSettings);
                        _.currentSlide = _.options.initialSlide;
                        _.originalSettings = _.options;
                        if (typeof document.mozHidden !== "undefined") {
                            _.hidden = "mozHidden";
                            _.visibilityChange = "mozvisibilitychange";
                        } else if (typeof document.webkitHidden !== "undefined") {
                            _.hidden = "webkitHidden";
                            _.visibilityChange = "webkitvisibilitychange";
                        }
                        _.autoPlay = $.proxy(_.autoPlay, _);
                        _.autoPlayClear = $.proxy(_.autoPlayClear, _);
                        _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
                        _.changeSlide = $.proxy(_.changeSlide, _);
                        _.clickHandler = $.proxy(_.clickHandler, _);
                        _.selectHandler = $.proxy(_.selectHandler, _);
                        _.setPosition = $.proxy(_.setPosition, _);
                        _.swipeHandler = $.proxy(_.swipeHandler, _);
                        _.dragHandler = $.proxy(_.dragHandler, _);
                        _.keyHandler = $.proxy(_.keyHandler, _);
                        _.instanceUid = instanceUid++;
                        _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
                        _.registerBreakpoints();
                        _.init(true);
                    }
                    return Slick;
                }();
                Slick.prototype.activateADA = function() {
                    var _ = this;
                    _.$slideTrack.find(".slick-active").attr({
                        "aria-hidden": "false"
                    }).find("a, input, button, select").attr({
                        tabindex: "0"
                    });
                };
                Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
                    var _ = this;
                    if (typeof index === "boolean") {
                        addBefore = index;
                        index = null;
                    } else if (index < 0 || index >= _.slideCount) return false;
                    _.unload();
                    if (typeof index === "number") if (index === 0 && _.$slides.length === 0) $(markup).appendTo(_.$slideTrack); else if (addBefore) $(markup).insertBefore(_.$slides.eq(index)); else $(markup).insertAfter(_.$slides.eq(index)); else if (addBefore === true) $(markup).prependTo(_.$slideTrack); else $(markup).appendTo(_.$slideTrack);
                    _.$slides = _.$slideTrack.children(this.options.slide);
                    _.$slideTrack.children(this.options.slide).detach();
                    _.$slideTrack.append(_.$slides);
                    _.$slides.each(function(index, element) {
                        $(element).attr("data-slick-index", index);
                    });
                    _.$slidesCache = _.$slides;
                    _.reinit();
                };
                Slick.prototype.animateHeight = function() {
                    var _ = this;
                    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                        _.$list.animate({
                            height: targetHeight
                        }, _.options.speed);
                    }
                };
                Slick.prototype.animateSlide = function(targetLeft, callback) {
                    var animProps = {}, _ = this;
                    _.animateHeight();
                    if (_.options.rtl === true && _.options.vertical === false) targetLeft = -targetLeft;
                    if (_.transformsEnabled === false) if (_.options.vertical === false) _.$slideTrack.animate({
                        left: targetLeft
                    }, _.options.speed, _.options.easing, callback); else _.$slideTrack.animate({
                        top: targetLeft
                    }, _.options.speed, _.options.easing, callback); else if (_.cssTransitions === false) {
                        if (_.options.rtl === true) _.currentLeft = -_.currentLeft;
                        $({
                            animStart: _.currentLeft
                        }).animate({
                            animStart: targetLeft
                        }, {
                            duration: _.options.speed,
                            easing: _.options.easing,
                            step: function(now) {
                                now = Math.ceil(now);
                                if (_.options.vertical === false) {
                                    animProps[_.animType] = "translate(" + now + "px, 0px)";
                                    _.$slideTrack.css(animProps);
                                } else {
                                    animProps[_.animType] = "translate(0px," + now + "px)";
                                    _.$slideTrack.css(animProps);
                                }
                            },
                            complete: function() {
                                if (callback) callback.call();
                            }
                        });
                    } else {
                        _.applyTransition();
                        targetLeft = Math.ceil(targetLeft);
                        if (_.options.vertical === false) animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)"; else animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
                        _.$slideTrack.css(animProps);
                        if (callback) setTimeout(function() {
                            _.disableTransition();
                            callback.call();
                        }, _.options.speed);
                    }
                };
                Slick.prototype.getNavTarget = function() {
                    var _ = this, asNavFor = _.options.asNavFor;
                    if (asNavFor && asNavFor !== null) asNavFor = $(asNavFor).not(_.$slider);
                    return asNavFor;
                };
                Slick.prototype.asNavFor = function(index) {
                    var _ = this, asNavFor = _.getNavTarget();
                    if (asNavFor !== null && typeof asNavFor === "object") asNavFor.each(function() {
                        var target = $(this).slick("getSlick");
                        if (!target.unslicked) target.slideHandler(index, true);
                    });
                };
                Slick.prototype.applyTransition = function(slide) {
                    var _ = this, transition = {};
                    if (_.options.fade === false) transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase; else transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
                    if (_.options.fade === false) _.$slideTrack.css(transition); else _.$slides.eq(slide).css(transition);
                };
                Slick.prototype.autoPlay = function() {
                    var _ = this;
                    _.autoPlayClear();
                    if (_.slideCount > _.options.slidesToShow) _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
                };
                Slick.prototype.autoPlayClear = function() {
                    var _ = this;
                    if (_.autoPlayTimer) clearInterval(_.autoPlayTimer);
                };
                Slick.prototype.autoPlayIterator = function() {
                    var _ = this, slideTo = _.currentSlide + _.options.slidesToScroll;
                    if (!_.paused && !_.interrupted && !_.focussed) {
                        if (_.options.infinite === false) if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) _.direction = 0; else if (_.direction === 0) {
                            slideTo = _.currentSlide - _.options.slidesToScroll;
                            if (_.currentSlide - 1 === 0) _.direction = 1;
                        }
                        _.slideHandler(slideTo);
                    }
                };
                Slick.prototype.buildArrows = function() {
                    var _ = this;
                    if (_.options.arrows === true) {
                        _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
                        _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
                        if (_.slideCount > _.options.slidesToShow) {
                            _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                            _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                            if (_.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.prependTo(_.options.appendArrows);
                            if (_.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.appendTo(_.options.appendArrows);
                            if (_.options.infinite !== true) _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        } else _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
                            "aria-disabled": "true",
                            tabindex: "-1"
                        });
                    }
                };
                Slick.prototype.buildDots = function() {
                    var i, dot, _ = this;
                    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                        _.$slider.addClass("slick-dotted");
                        dot = $("<ul />").addClass(_.options.dotsClass);
                        for (i = 0; i <= _.getDotCount(); i += 1) dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
                        _.$dots = dot.appendTo(_.options.appendDots);
                        _.$dots.find("li").first().addClass("slick-active");
                    }
                };
                Slick.prototype.buildOut = function() {
                    var _ = this;
                    _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
                    _.slideCount = _.$slides.length;
                    _.$slides.each(function(index, element) {
                        $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "");
                    });
                    _.$slider.addClass("slick-slider");
                    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
                    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
                    _.$slideTrack.css("opacity", 0);
                    if (_.options.centerMode === true || _.options.swipeToSlide === true) _.options.slidesToScroll = 1;
                    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
                    _.setupInfinite();
                    _.buildArrows();
                    _.buildDots();
                    _.updateDots();
                    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
                    if (_.options.draggable === true) _.$list.addClass("draggable");
                };
                Slick.prototype.buildRows = function() {
                    var a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection, _ = this;
                    newSlides = document.createDocumentFragment();
                    originalSlides = _.$slider.children();
                    if (_.options.rows > 0) {
                        slidesPerSection = _.options.slidesPerRow * _.options.rows;
                        numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
                        for (a = 0; a < numOfSlides; a++) {
                            var slide = document.createElement("div");
                            for (b = 0; b < _.options.rows; b++) {
                                var row = document.createElement("div");
                                for (c = 0; c < _.options.slidesPerRow; c++) {
                                    var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                                    if (originalSlides.get(target)) row.appendChild(originalSlides.get(target));
                                }
                                slide.appendChild(row);
                            }
                            newSlides.appendChild(slide);
                        }
                        _.$slider.empty().append(newSlides);
                        _.$slider.children().children().children().css({
                            width: 100 / _.options.slidesPerRow + "%",
                            display: "inline-block"
                        });
                    }
                };
                Slick.prototype.checkResponsive = function(initial, forceUpdate) {
                    var breakpoint, targetBreakpoint, respondToWidth, _ = this, triggerBreakpoint = false;
                    var sliderWidth = _.$slider.width();
                    var windowWidth = window.innerWidth || $(window).width();
                    if (_.respondTo === "window") respondToWidth = windowWidth; else if (_.respondTo === "slider") respondToWidth = sliderWidth; else if (_.respondTo === "min") respondToWidth = Math.min(windowWidth, sliderWidth);
                    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
                        targetBreakpoint = null;
                        for (breakpoint in _.breakpoints) if (_.breakpoints.hasOwnProperty(breakpoint)) if (_.originalSettings.mobileFirst === false) {
                            if (respondToWidth < _.breakpoints[breakpoint]) targetBreakpoint = _.breakpoints[breakpoint];
                        } else if (respondToWidth > _.breakpoints[breakpoint]) targetBreakpoint = _.breakpoints[breakpoint];
                        if (targetBreakpoint !== null) if (_.activeBreakpoint !== null) {
                            if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                                _.activeBreakpoint = targetBreakpoint;
                                if (_.breakpointSettings[targetBreakpoint] === "unslick") _.unslick(targetBreakpoint); else {
                                    _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                                    if (initial === true) _.currentSlide = _.options.initialSlide;
                                    _.refresh(initial);
                                }
                                triggerBreakpoint = targetBreakpoint;
                            }
                        } else {
                            _.activeBreakpoint = targetBreakpoint;
                            if (_.breakpointSettings[targetBreakpoint] === "unslick") _.unslick(targetBreakpoint); else {
                                _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                                if (initial === true) _.currentSlide = _.options.initialSlide;
                                _.refresh(initial);
                            }
                            triggerBreakpoint = targetBreakpoint;
                        } else if (_.activeBreakpoint !== null) {
                            _.activeBreakpoint = null;
                            _.options = _.originalSettings;
                            if (initial === true) _.currentSlide = _.options.initialSlide;
                            _.refresh(initial);
                            triggerBreakpoint = targetBreakpoint;
                        }
                        if (!initial && triggerBreakpoint !== false) _.$slider.trigger("breakpoint", [ _, triggerBreakpoint ]);
                    }
                };
                Slick.prototype.changeSlide = function(event, dontAnimate) {
                    var indexOffset, slideOffset, unevenOffset, _ = this, $target = $(event.currentTarget);
                    if ($target.is("a")) event.preventDefault();
                    if (!$target.is("li")) $target = $target.closest("li");
                    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
                    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
                    switch (event.data.message) {
                      case "previous":
                        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                        if (_.slideCount > _.options.slidesToShow) _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                        break;

                      case "next":
                        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                        if (_.slideCount > _.options.slidesToShow) _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                        break;

                      case "index":
                        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                        $target.children().trigger("focus");
                        break;

                      default:
                        return;
                    }
                };
                Slick.prototype.checkNavigable = function(index) {
                    var navigables, prevNavigable, _ = this;
                    navigables = _.getNavigableIndexes();
                    prevNavigable = 0;
                    if (index > navigables[navigables.length - 1]) index = navigables[navigables.length - 1]; else for (var n in navigables) {
                        if (index < navigables[n]) {
                            index = prevNavigable;
                            break;
                        }
                        prevNavigable = navigables[n];
                    }
                    return index;
                };
                Slick.prototype.cleanUpEvents = function() {
                    var _ = this;
                    if (_.options.dots && _.$dots !== null) {
                        $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));
                        if (_.options.accessibility === true) _.$dots.off("keydown.slick", _.keyHandler);
                    }
                    _.$slider.off("focus.slick blur.slick");
                    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
                        _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
                        if (_.options.accessibility === true) {
                            _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
                            _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
                        }
                    }
                    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
                    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
                    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
                    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
                    _.$list.off("click.slick", _.clickHandler);
                    $(document).off(_.visibilityChange, _.visibility);
                    _.cleanUpSlideEvents();
                    if (_.options.accessibility === true) _.$list.off("keydown.slick", _.keyHandler);
                    if (_.options.focusOnSelect === true) $(_.$slideTrack).children().off("click.slick", _.selectHandler);
                    $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
                    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
                    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
                    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
                };
                Slick.prototype.cleanUpSlideEvents = function() {
                    var _ = this;
                    _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
                    _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
                };
                Slick.prototype.cleanUpRows = function() {
                    var originalSlides, _ = this;
                    if (_.options.rows > 0) {
                        originalSlides = _.$slides.children().children();
                        originalSlides.removeAttr("style");
                        _.$slider.empty().append(originalSlides);
                    }
                };
                Slick.prototype.clickHandler = function(event) {
                    var _ = this;
                    if (_.shouldClick === false) {
                        event.stopImmediatePropagation();
                        event.stopPropagation();
                        event.preventDefault();
                    }
                };
                Slick.prototype.destroy = function(refresh) {
                    var _ = this;
                    _.autoPlayClear();
                    _.touchObject = {};
                    _.cleanUpEvents();
                    $(".slick-cloned", _.$slider).detach();
                    if (_.$dots) _.$dots.remove();
                    if (_.$prevArrow && _.$prevArrow.length) {
                        _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                        if (_.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.remove();
                    }
                    if (_.$nextArrow && _.$nextArrow.length) {
                        _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                        if (_.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.remove();
                    }
                    if (_.$slides) {
                        _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                            $(this).attr("style", $(this).data("originalStyling"));
                        });
                        _.$slideTrack.children(this.options.slide).detach();
                        _.$slideTrack.detach();
                        _.$list.detach();
                        _.$slider.append(_.$slides);
                    }
                    _.cleanUpRows();
                    _.$slider.removeClass("slick-slider");
                    _.$slider.removeClass("slick-initialized");
                    _.$slider.removeClass("slick-dotted");
                    _.unslicked = true;
                    if (!refresh) _.$slider.trigger("destroy", [ _ ]);
                };
                Slick.prototype.disableTransition = function(slide) {
                    var _ = this, transition = {};
                    transition[_.transitionType] = "";
                    if (_.options.fade === false) _.$slideTrack.css(transition); else _.$slides.eq(slide).css(transition);
                };
                Slick.prototype.fadeSlide = function(slideIndex, callback) {
                    var _ = this;
                    if (_.cssTransitions === false) {
                        _.$slides.eq(slideIndex).css({
                            zIndex: _.options.zIndex
                        });
                        _.$slides.eq(slideIndex).animate({
                            opacity: 1
                        }, _.options.speed, _.options.easing, callback);
                    } else {
                        _.applyTransition(slideIndex);
                        _.$slides.eq(slideIndex).css({
                            opacity: 1,
                            zIndex: _.options.zIndex
                        });
                        if (callback) setTimeout(function() {
                            _.disableTransition(slideIndex);
                            callback.call();
                        }, _.options.speed);
                    }
                };
                Slick.prototype.fadeSlideOut = function(slideIndex) {
                    var _ = this;
                    if (_.cssTransitions === false) _.$slides.eq(slideIndex).animate({
                        opacity: 0,
                        zIndex: _.options.zIndex - 2
                    }, _.options.speed, _.options.easing); else {
                        _.applyTransition(slideIndex);
                        _.$slides.eq(slideIndex).css({
                            opacity: 0,
                            zIndex: _.options.zIndex - 2
                        });
                    }
                };
                Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
                    var _ = this;
                    if (filter !== null) {
                        _.$slidesCache = _.$slides;
                        _.unload();
                        _.$slideTrack.children(this.options.slide).detach();
                        _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
                        _.reinit();
                    }
                };
                Slick.prototype.focusHandler = function() {
                    var _ = this;
                    _.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(event) {
                        event.stopImmediatePropagation();
                        var $sf = $(this);
                        setTimeout(function() {
                            if (_.options.pauseOnFocus) {
                                _.focussed = $sf.is(":focus");
                                _.autoPlay();
                            }
                        }, 0);
                    });
                };
                Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
                    var _ = this;
                    return _.currentSlide;
                };
                Slick.prototype.getDotCount = function() {
                    var _ = this;
                    var breakPoint = 0;
                    var counter = 0;
                    var pagerQty = 0;
                    if (_.options.infinite === true) if (_.slideCount <= _.options.slidesToShow) ++pagerQty; else while (breakPoint < _.slideCount) {
                        ++pagerQty;
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    } else if (_.options.centerMode === true) pagerQty = _.slideCount; else if (!_.options.asNavFor) pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll); else while (breakPoint < _.slideCount) {
                        ++pagerQty;
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                    return pagerQty - 1;
                };
                Slick.prototype.getLeft = function(slideIndex) {
                    var targetLeft, verticalHeight, targetSlide, coef, _ = this, verticalOffset = 0;
                    _.slideOffset = 0;
                    verticalHeight = _.$slides.first().outerHeight(true);
                    if (_.options.infinite === true) {
                        if (_.slideCount > _.options.slidesToShow) {
                            _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                            coef = -1;
                            if (_.options.vertical === true && _.options.centerMode === true) if (_.options.slidesToShow === 2) coef = -1.5; else if (_.options.slidesToShow === 1) coef = -2;
                            verticalOffset = verticalHeight * _.options.slidesToShow * coef;
                        }
                        if (_.slideCount % _.options.slidesToScroll !== 0) if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) if (slideIndex > _.slideCount) {
                            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                        } else {
                            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                        }
                    } else if (slideIndex + _.options.slidesToShow > _.slideCount) {
                        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
                    }
                    if (_.slideCount <= _.options.slidesToShow) {
                        _.slideOffset = 0;
                        verticalOffset = 0;
                    }
                    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2; else if (_.options.centerMode === true && _.options.infinite === true) _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth; else if (_.options.centerMode === true) {
                        _.slideOffset = 0;
                        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
                    }
                    if (_.options.vertical === false) targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset; else targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
                    if (_.options.variableWidth === true) {
                        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex); else targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
                        if (_.options.rtl === true) if (targetSlide[0]) targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1; else targetLeft = 0; else targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                        if (_.options.centerMode === true) {
                            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex); else targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
                            if (_.options.rtl === true) if (targetSlide[0]) targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1; else targetLeft = 0; else targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                            targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
                        }
                    }
                    return targetLeft;
                };
                Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
                    var _ = this;
                    return _.options[option];
                };
                Slick.prototype.getNavigableIndexes = function() {
                    var max, _ = this, breakPoint = 0, counter = 0, indexes = [];
                    if (_.options.infinite === false) max = _.slideCount; else {
                        breakPoint = _.options.slidesToScroll * -1;
                        counter = _.options.slidesToScroll * -1;
                        max = _.slideCount * 2;
                    }
                    while (breakPoint < max) {
                        indexes.push(breakPoint);
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                    return indexes;
                };
                Slick.prototype.getSlick = function() {
                    return this;
                };
                Slick.prototype.getSlideCount = function() {
                    var slidesTraversed, swipedSlide, centerOffset, _ = this;
                    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
                    if (_.options.swipeToSlide === true) {
                        _.$slideTrack.find(".slick-slide").each(function(index, slide) {
                            if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                                swipedSlide = slide;
                                return false;
                            }
                        });
                        slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
                        return slidesTraversed;
                    } else return _.options.slidesToScroll;
                };
                Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
                    var _ = this;
                    _.changeSlide({
                        data: {
                            message: "index",
                            index: parseInt(slide)
                        }
                    }, dontAnimate);
                };
                Slick.prototype.init = function(creation) {
                    var _ = this;
                    if (!$(_.$slider).hasClass("slick-initialized")) {
                        $(_.$slider).addClass("slick-initialized");
                        _.buildRows();
                        _.buildOut();
                        _.setProps();
                        _.startLoad();
                        _.loadSlider();
                        _.initializeEvents();
                        _.updateArrows();
                        _.updateDots();
                        _.checkResponsive(true);
                        _.focusHandler();
                    }
                    if (creation) _.$slider.trigger("init", [ _ ]);
                    if (_.options.accessibility === true) _.initADA();
                    if (_.options.autoplay) {
                        _.paused = false;
                        _.autoPlay();
                    }
                };
                Slick.prototype.initADA = function() {
                    var _ = this, numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow), tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                        return val >= 0 && val < _.slideCount;
                    });
                    _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }).find("a, input, button, select").attr({
                        tabindex: "-1"
                    });
                    if (_.$dots !== null) {
                        _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i) {
                            var slideControlIndex = tabControlIndexes.indexOf(i);
                            $(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + _.instanceUid + i,
                                tabindex: -1
                            });
                            if (slideControlIndex !== -1) {
                                var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
                                if ($("#" + ariaButtonControl).length) $(this).attr({
                                    "aria-describedby": ariaButtonControl
                                });
                            }
                        });
                        _.$dots.attr("role", "tablist").find("li").each(function(i) {
                            var mappedSlideIndex = tabControlIndexes[i];
                            $(this).attr({
                                role: "presentation"
                            });
                            $(this).find("button").first().attr({
                                role: "tab",
                                id: "slick-slide-control" + _.instanceUid + i,
                                "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
                                "aria-label": i + 1 + " of " + numDotGroups,
                                "aria-selected": null,
                                tabindex: "-1"
                            });
                        }).eq(_.currentSlide).find("button").attr({
                            "aria-selected": "true",
                            tabindex: "0"
                        }).end();
                    }
                    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) if (_.options.focusOnChange) _.$slides.eq(i).attr({
                        tabindex: "0"
                    }); else _.$slides.eq(i).removeAttr("tabindex");
                    _.activateADA();
                };
                Slick.prototype.initArrowEvents = function() {
                    var _ = this;
                    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.off("click.slick").on("click.slick", {
                            message: "previous"
                        }, _.changeSlide);
                        _.$nextArrow.off("click.slick").on("click.slick", {
                            message: "next"
                        }, _.changeSlide);
                        if (_.options.accessibility === true) {
                            _.$prevArrow.on("keydown.slick", _.keyHandler);
                            _.$nextArrow.on("keydown.slick", _.keyHandler);
                        }
                    }
                };
                Slick.prototype.initDotEvents = function() {
                    var _ = this;
                    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                        $("li", _.$dots).on("click.slick", {
                            message: "index"
                        }, _.changeSlide);
                        if (_.options.accessibility === true) _.$dots.on("keydown.slick", _.keyHandler);
                    }
                    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false));
                };
                Slick.prototype.initSlideEvents = function() {
                    var _ = this;
                    if (_.options.pauseOnHover) {
                        _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
                        _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
                    }
                };
                Slick.prototype.initializeEvents = function() {
                    var _ = this;
                    _.initArrowEvents();
                    _.initDotEvents();
                    _.initSlideEvents();
                    _.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, _.swipeHandler);
                    _.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, _.swipeHandler);
                    _.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, _.swipeHandler);
                    _.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, _.swipeHandler);
                    _.$list.on("click.slick", _.clickHandler);
                    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
                    if (_.options.accessibility === true) _.$list.on("keydown.slick", _.keyHandler);
                    if (_.options.focusOnSelect === true) $(_.$slideTrack).children().on("click.slick", _.selectHandler);
                    $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
                    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
                    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
                    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
                    $(_.setPosition);
                };
                Slick.prototype.initUI = function() {
                    var _ = this;
                    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.show();
                        _.$nextArrow.show();
                    }
                    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) _.$dots.show();
                };
                Slick.prototype.keyHandler = function(event) {
                    var _ = this;
                    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) if (event.keyCode === 37 && _.options.accessibility === true) _.changeSlide({
                        data: {
                            message: _.options.rtl === true ? "next" : "previous"
                        }
                    }); else if (event.keyCode === 39 && _.options.accessibility === true) _.changeSlide({
                        data: {
                            message: _.options.rtl === true ? "previous" : "next"
                        }
                    });
                };
                Slick.prototype.lazyLoad = function() {
                    var loadRange, cloneRange, rangeStart, rangeEnd, _ = this;
                    function loadImages(imagesScope) {
                        $("img[data-lazy]", imagesScope).each(function() {
                            var image = $(this), imageSource = $(this).attr("data-lazy"), imageSrcSet = $(this).attr("data-srcset"), imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"), imageToLoad = document.createElement("img");
                            imageToLoad.onload = function() {
                                image.animate({
                                    opacity: 0
                                }, 100, function() {
                                    if (imageSrcSet) {
                                        image.attr("srcset", imageSrcSet);
                                        if (imageSizes) image.attr("sizes", imageSizes);
                                    }
                                    image.attr("src", imageSource).animate({
                                        opacity: 1
                                    }, 200, function() {
                                        image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    });
                                    _.$slider.trigger("lazyLoaded", [ _, image, imageSource ]);
                                });
                            };
                            imageToLoad.onerror = function() {
                                image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                                _.$slider.trigger("lazyLoadError", [ _, image, imageSource ]);
                            };
                            imageToLoad.src = imageSource;
                        });
                    }
                    if (_.options.centerMode === true) if (_.options.infinite === true) {
                        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                        rangeEnd = rangeStart + _.options.slidesToShow + 2;
                    } else {
                        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
                    } else {
                        rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
                        rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
                        if (_.options.fade === true) {
                            if (rangeStart > 0) rangeStart--;
                            if (rangeEnd <= _.slideCount) rangeEnd++;
                        }
                    }
                    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
                    if (_.options.lazyLoad === "anticipated") {
                        var prevSlide = rangeStart - 1, nextSlide = rangeEnd, $slides = _.$slider.find(".slick-slide");
                        for (var i = 0; i < _.options.slidesToScroll; i++) {
                            if (prevSlide < 0) prevSlide = _.slideCount - 1;
                            loadRange = loadRange.add($slides.eq(prevSlide));
                            loadRange = loadRange.add($slides.eq(nextSlide));
                            prevSlide--;
                            nextSlide++;
                        }
                    }
                    loadImages(loadRange);
                    if (_.slideCount <= _.options.slidesToShow) {
                        cloneRange = _.$slider.find(".slick-slide");
                        loadImages(cloneRange);
                    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                        cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
                        loadImages(cloneRange);
                    } else if (_.currentSlide === 0) {
                        cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
                        loadImages(cloneRange);
                    }
                };
                Slick.prototype.loadSlider = function() {
                    var _ = this;
                    _.setPosition();
                    _.$slideTrack.css({
                        opacity: 1
                    });
                    _.$slider.removeClass("slick-loading");
                    _.initUI();
                    if (_.options.lazyLoad === "progressive") _.progressiveLazyLoad();
                };
                Slick.prototype.next = Slick.prototype.slickNext = function() {
                    var _ = this;
                    _.changeSlide({
                        data: {
                            message: "next"
                        }
                    });
                };
                Slick.prototype.orientationChange = function() {
                    var _ = this;
                    _.checkResponsive();
                    _.setPosition();
                };
                Slick.prototype.pause = Slick.prototype.slickPause = function() {
                    var _ = this;
                    _.autoPlayClear();
                    _.paused = true;
                };
                Slick.prototype.play = Slick.prototype.slickPlay = function() {
                    var _ = this;
                    _.autoPlay();
                    _.options.autoplay = true;
                    _.paused = false;
                    _.focussed = false;
                    _.interrupted = false;
                };
                Slick.prototype.postSlide = function(index) {
                    var _ = this;
                    if (!_.unslicked) {
                        _.$slider.trigger("afterChange", [ _, index ]);
                        _.animating = false;
                        if (_.slideCount > _.options.slidesToShow) _.setPosition();
                        _.swipeLeft = null;
                        if (_.options.autoplay) _.autoPlay();
                        if (_.options.accessibility === true) {
                            _.initADA();
                            if (_.options.focusOnChange) {
                                var $currentSlide = $(_.$slides.get(_.currentSlide));
                                $currentSlide.attr("tabindex", 0).focus();
                            }
                        }
                    }
                };
                Slick.prototype.prev = Slick.prototype.slickPrev = function() {
                    var _ = this;
                    _.changeSlide({
                        data: {
                            message: "previous"
                        }
                    });
                };
                Slick.prototype.preventDefault = function(event) {
                    event.preventDefault();
                };
                Slick.prototype.progressiveLazyLoad = function(tryCount) {
                    tryCount = tryCount || 1;
                    var image, imageSource, imageSrcSet, imageSizes, imageToLoad, _ = this, $imgsToLoad = $("img[data-lazy]", _.$slider);
                    if ($imgsToLoad.length) {
                        image = $imgsToLoad.first();
                        imageSource = image.attr("data-lazy");
                        imageSrcSet = image.attr("data-srcset");
                        imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
                        imageToLoad = document.createElement("img");
                        imageToLoad.onload = function() {
                            if (imageSrcSet) {
                                image.attr("srcset", imageSrcSet);
                                if (imageSizes) image.attr("sizes", imageSizes);
                            }
                            image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                            if (_.options.adaptiveHeight === true) _.setPosition();
                            _.$slider.trigger("lazyLoaded", [ _, image, imageSource ]);
                            _.progressiveLazyLoad();
                        };
                        imageToLoad.onerror = function() {
                            if (tryCount < 3) setTimeout(function() {
                                _.progressiveLazyLoad(tryCount + 1);
                            }, 500); else {
                                image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                                _.$slider.trigger("lazyLoadError", [ _, image, imageSource ]);
                                _.progressiveLazyLoad();
                            }
                        };
                        imageToLoad.src = imageSource;
                    } else _.$slider.trigger("allImagesLoaded", [ _ ]);
                };
                Slick.prototype.refresh = function(initializing) {
                    var currentSlide, lastVisibleIndex, _ = this;
                    lastVisibleIndex = _.slideCount - _.options.slidesToShow;
                    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) _.currentSlide = lastVisibleIndex;
                    if (_.slideCount <= _.options.slidesToShow) _.currentSlide = 0;
                    currentSlide = _.currentSlide;
                    _.destroy(true);
                    $.extend(_, _.initials, {
                        currentSlide
                    });
                    _.init();
                    if (!initializing) _.changeSlide({
                        data: {
                            message: "index",
                            index: currentSlide
                        }
                    }, false);
                };
                Slick.prototype.registerBreakpoints = function() {
                    var breakpoint, currentBreakpoint, l, _ = this, responsiveSettings = _.options.responsive || null;
                    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
                        _.respondTo = _.options.respondTo || "window";
                        for (breakpoint in responsiveSettings) {
                            l = _.breakpoints.length - 1;
                            if (responsiveSettings.hasOwnProperty(breakpoint)) {
                                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                                while (l >= 0) {
                                    if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) _.breakpoints.splice(l, 1);
                                    l--;
                                }
                                _.breakpoints.push(currentBreakpoint);
                                _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                            }
                        }
                        _.breakpoints.sort(function(a, b) {
                            return _.options.mobileFirst ? a - b : b - a;
                        });
                    }
                };
                Slick.prototype.reinit = function() {
                    var _ = this;
                    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
                    _.slideCount = _.$slides.length;
                    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) _.currentSlide = _.currentSlide - _.options.slidesToScroll;
                    if (_.slideCount <= _.options.slidesToShow) _.currentSlide = 0;
                    _.registerBreakpoints();
                    _.setProps();
                    _.setupInfinite();
                    _.buildArrows();
                    _.updateArrows();
                    _.initArrowEvents();
                    _.buildDots();
                    _.updateDots();
                    _.initDotEvents();
                    _.cleanUpSlideEvents();
                    _.initSlideEvents();
                    _.checkResponsive(false, true);
                    if (_.options.focusOnSelect === true) $(_.$slideTrack).children().on("click.slick", _.selectHandler);
                    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
                    _.setPosition();
                    _.focusHandler();
                    _.paused = !_.options.autoplay;
                    _.autoPlay();
                    _.$slider.trigger("reInit", [ _ ]);
                };
                Slick.prototype.resize = function() {
                    var _ = this;
                    if ($(window).width() !== _.windowWidth) {
                        clearTimeout(_.windowDelay);
                        _.windowDelay = window.setTimeout(function() {
                            _.windowWidth = $(window).width();
                            _.checkResponsive();
                            if (!_.unslicked) _.setPosition();
                        }, 50);
                    }
                };
                Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
                    var _ = this;
                    if (typeof index === "boolean") {
                        removeBefore = index;
                        index = removeBefore === true ? 0 : _.slideCount - 1;
                    } else index = removeBefore === true ? --index : index;
                    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) return false;
                    _.unload();
                    if (removeAll === true) _.$slideTrack.children().remove(); else _.$slideTrack.children(this.options.slide).eq(index).remove();
                    _.$slides = _.$slideTrack.children(this.options.slide);
                    _.$slideTrack.children(this.options.slide).detach();
                    _.$slideTrack.append(_.$slides);
                    _.$slidesCache = _.$slides;
                    _.reinit();
                };
                Slick.prototype.setCSS = function(position) {
                    var x, y, _ = this, positionProps = {};
                    if (_.options.rtl === true) position = -position;
                    x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
                    y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
                    positionProps[_.positionProp] = position;
                    if (_.transformsEnabled === false) _.$slideTrack.css(positionProps); else {
                        positionProps = {};
                        if (_.cssTransitions === false) {
                            positionProps[_.animType] = "translate(" + x + ", " + y + ")";
                            _.$slideTrack.css(positionProps);
                        } else {
                            positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
                            _.$slideTrack.css(positionProps);
                        }
                    }
                };
                Slick.prototype.setDimensions = function() {
                    var _ = this;
                    if (_.options.vertical === false) {
                        if (_.options.centerMode === true) _.$list.css({
                            padding: "0px " + _.options.centerPadding
                        });
                    } else {
                        _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
                        if (_.options.centerMode === true) _.$list.css({
                            padding: _.options.centerPadding + " 0px"
                        });
                    }
                    _.listWidth = _.$list.width();
                    _.listHeight = _.$list.height();
                    if (_.options.vertical === false && _.options.variableWidth === false) {
                        _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
                        _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
                    } else if (_.options.variableWidth === true) _.$slideTrack.width(5e3 * _.slideCount); else {
                        _.slideWidth = Math.ceil(_.listWidth);
                        _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
                    }
                    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
                    if (_.options.variableWidth === false) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
                };
                Slick.prototype.setFade = function() {
                    var targetLeft, _ = this;
                    _.$slides.each(function(index, element) {
                        targetLeft = _.slideWidth * index * -1;
                        if (_.options.rtl === true) $(element).css({
                            position: "relative",
                            right: targetLeft,
                            top: 0,
                            zIndex: _.options.zIndex - 2,
                            opacity: 0
                        }); else $(element).css({
                            position: "relative",
                            left: targetLeft,
                            top: 0,
                            zIndex: _.options.zIndex - 2,
                            opacity: 0
                        });
                    });
                    _.$slides.eq(_.currentSlide).css({
                        zIndex: _.options.zIndex - 1,
                        opacity: 1
                    });
                };
                Slick.prototype.setHeight = function() {
                    var _ = this;
                    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                        _.$list.css("height", targetHeight);
                    }
                };
                Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
                    var l, item, option, value, type, _ = this, refresh = false;
                    if ($.type(arguments[0]) === "object") {
                        option = arguments[0];
                        refresh = arguments[1];
                        type = "multiple";
                    } else if ($.type(arguments[0]) === "string") {
                        option = arguments[0];
                        value = arguments[1];
                        refresh = arguments[2];
                        if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") type = "responsive"; else if (typeof arguments[1] !== "undefined") type = "single";
                    }
                    if (type === "single") _.options[option] = value; else if (type === "multiple") $.each(option, function(opt, val) {
                        _.options[opt] = val;
                    }); else if (type === "responsive") for (item in value) if ($.type(_.options.responsive) !== "array") _.options.responsive = [ value[item] ]; else {
                        l = _.options.responsive.length - 1;
                        while (l >= 0) {
                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) _.options.responsive.splice(l, 1);
                            l--;
                        }
                        _.options.responsive.push(value[item]);
                    }
                    if (refresh) {
                        _.unload();
                        _.reinit();
                    }
                };
                Slick.prototype.setPosition = function() {
                    var _ = this;
                    _.setDimensions();
                    _.setHeight();
                    if (_.options.fade === false) _.setCSS(_.getLeft(_.currentSlide)); else _.setFade();
                    _.$slider.trigger("setPosition", [ _ ]);
                };
                Slick.prototype.setProps = function() {
                    var _ = this, bodyStyle = document.body.style;
                    _.positionProp = _.options.vertical === true ? "top" : "left";
                    if (_.positionProp === "top") _.$slider.addClass("slick-vertical"); else _.$slider.removeClass("slick-vertical");
                    if (bodyStyle.WebkitTransition !== void 0 || bodyStyle.MozTransition !== void 0 || bodyStyle.msTransition !== void 0) if (_.options.useCSS === true) _.cssTransitions = true;
                    if (_.options.fade) if (typeof _.options.zIndex === "number") {
                        if (_.options.zIndex < 3) _.options.zIndex = 3;
                    } else _.options.zIndex = _.defaults.zIndex;
                    if (bodyStyle.OTransform !== void 0) {
                        _.animType = "OTransform";
                        _.transformType = "-o-transform";
                        _.transitionType = "OTransition";
                        if (bodyStyle.perspectiveProperty === void 0 && bodyStyle.webkitPerspective === void 0) _.animType = false;
                    }
                    if (bodyStyle.MozTransform !== void 0) {
                        _.animType = "MozTransform";
                        _.transformType = "-moz-transform";
                        _.transitionType = "MozTransition";
                        if (bodyStyle.perspectiveProperty === void 0 && bodyStyle.MozPerspective === void 0) _.animType = false;
                    }
                    if (bodyStyle.webkitTransform !== void 0) {
                        _.animType = "webkitTransform";
                        _.transformType = "-webkit-transform";
                        _.transitionType = "webkitTransition";
                        if (bodyStyle.perspectiveProperty === void 0 && bodyStyle.webkitPerspective === void 0) _.animType = false;
                    }
                    if (bodyStyle.msTransform !== void 0) {
                        _.animType = "msTransform";
                        _.transformType = "-ms-transform";
                        _.transitionType = "msTransition";
                        if (bodyStyle.msTransform === void 0) _.animType = false;
                    }
                    if (bodyStyle.transform !== void 0 && _.animType !== false) {
                        _.animType = "transform";
                        _.transformType = "transform";
                        _.transitionType = "transition";
                    }
                    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
                };
                Slick.prototype.setSlideClasses = function(index) {
                    var centerOffset, allSlides, indexOffset, remainder, _ = this;
                    allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
                    _.$slides.eq(index).addClass("slick-current");
                    if (_.options.centerMode === true) {
                        var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
                        centerOffset = Math.floor(_.options.slidesToShow / 2);
                        if (_.options.infinite === true) {
                            if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false"); else {
                                indexOffset = _.options.slidesToShow + index;
                                allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false");
                            }
                            if (index === 0) allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center"); else if (index === _.slideCount - 1) allSlides.eq(_.options.slidesToShow).addClass("slick-center");
                        }
                        _.$slides.eq(index).addClass("slick-center");
                    } else if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"); else if (allSlides.length <= _.options.slidesToShow) allSlides.addClass("slick-active").attr("aria-hidden", "false"); else {
                        remainder = _.slideCount % _.options.slidesToShow;
                        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false"); else allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
                    }
                    if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") _.lazyLoad();
                };
                Slick.prototype.setupInfinite = function() {
                    var i, slideIndex, infiniteCount, _ = this;
                    if (_.options.fade === true) _.options.centerMode = false;
                    if (_.options.infinite === true && _.options.fade === false) {
                        slideIndex = null;
                        if (_.slideCount > _.options.slidesToShow) {
                            if (_.options.centerMode === true) infiniteCount = _.options.slidesToShow + 1; else infiniteCount = _.options.slidesToShow;
                            for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                                slideIndex = i - 1;
                                $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
                            }
                            for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                                slideIndex = i;
                                $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
                            }
                            _.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                                $(this).attr("id", "");
                            });
                        }
                    }
                };
                Slick.prototype.interrupt = function(toggle) {
                    var _ = this;
                    if (!toggle) _.autoPlay();
                    _.interrupted = toggle;
                };
                Slick.prototype.selectHandler = function(event) {
                    var _ = this;
                    var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");
                    var index = parseInt(targetElement.attr("data-slick-index"));
                    if (!index) index = 0;
                    if (_.slideCount <= _.options.slidesToShow) {
                        _.slideHandler(index, false, true);
                        return;
                    }
                    _.slideHandler(index);
                };
                Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
                    var targetSlide, animSlide, oldSlide, slideLeft, navTarget, targetLeft = null, _ = this;
                    sync = sync || false;
                    if (_.animating === true && _.options.waitForAnimate === true) return;
                    if (_.options.fade === true && _.currentSlide === index) return;
                    if (sync === false) _.asNavFor(index);
                    targetSlide = index;
                    targetLeft = _.getLeft(targetSlide);
                    slideLeft = _.getLeft(_.currentSlide);
                    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
                    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
                        if (_.options.fade === false) {
                            targetSlide = _.currentSlide;
                            if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) _.animateSlide(slideLeft, function() {
                                _.postSlide(targetSlide);
                            }); else _.postSlide(targetSlide);
                        }
                        return;
                    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
                        if (_.options.fade === false) {
                            targetSlide = _.currentSlide;
                            if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) _.animateSlide(slideLeft, function() {
                                _.postSlide(targetSlide);
                            }); else _.postSlide(targetSlide);
                        }
                        return;
                    }
                    if (_.options.autoplay) clearInterval(_.autoPlayTimer);
                    if (targetSlide < 0) if (_.slideCount % _.options.slidesToScroll !== 0) animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll; else animSlide = _.slideCount + targetSlide; else if (targetSlide >= _.slideCount) if (_.slideCount % _.options.slidesToScroll !== 0) animSlide = 0; else animSlide = targetSlide - _.slideCount; else animSlide = targetSlide;
                    _.animating = true;
                    _.$slider.trigger("beforeChange", [ _, _.currentSlide, animSlide ]);
                    oldSlide = _.currentSlide;
                    _.currentSlide = animSlide;
                    _.setSlideClasses(_.currentSlide);
                    if (_.options.asNavFor) {
                        navTarget = _.getNavTarget();
                        navTarget = navTarget.slick("getSlick");
                        if (navTarget.slideCount <= navTarget.options.slidesToShow) navTarget.setSlideClasses(_.currentSlide);
                    }
                    _.updateDots();
                    _.updateArrows();
                    if (_.options.fade === true) {
                        if (dontAnimate !== true) {
                            _.fadeSlideOut(oldSlide);
                            _.fadeSlide(animSlide, function() {
                                _.postSlide(animSlide);
                            });
                        } else _.postSlide(animSlide);
                        _.animateHeight();
                        return;
                    }
                    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) _.animateSlide(targetLeft, function() {
                        _.postSlide(animSlide);
                    }); else _.postSlide(animSlide);
                };
                Slick.prototype.startLoad = function() {
                    var _ = this;
                    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.hide();
                        _.$nextArrow.hide();
                    }
                    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) _.$dots.hide();
                    _.$slider.addClass("slick-loading");
                };
                Slick.prototype.swipeDirection = function() {
                    var xDist, yDist, r, swipeAngle, _ = this;
                    xDist = _.touchObject.startX - _.touchObject.curX;
                    yDist = _.touchObject.startY - _.touchObject.curY;
                    r = Math.atan2(yDist, xDist);
                    swipeAngle = Math.round(r * 180 / Math.PI);
                    if (swipeAngle < 0) swipeAngle = 360 - Math.abs(swipeAngle);
                    if (swipeAngle <= 45 && swipeAngle >= 0) return _.options.rtl === false ? "left" : "right";
                    if (swipeAngle <= 360 && swipeAngle >= 315) return _.options.rtl === false ? "left" : "right";
                    if (swipeAngle >= 135 && swipeAngle <= 225) return _.options.rtl === false ? "right" : "left";
                    if (_.options.verticalSwiping === true) if (swipeAngle >= 35 && swipeAngle <= 135) return "down"; else return "up";
                    return "vertical";
                };
                Slick.prototype.swipeEnd = function(event) {
                    var slideCount, direction, _ = this;
                    _.dragging = false;
                    _.swiping = false;
                    if (_.scrolling) {
                        _.scrolling = false;
                        return false;
                    }
                    _.interrupted = false;
                    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
                    if (_.touchObject.curX === void 0) return false;
                    if (_.touchObject.edgeHit === true) _.$slider.trigger("edge", [ _, _.swipeDirection() ]);
                    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
                        direction = _.swipeDirection();
                        switch (direction) {
                          case "left":
                          case "down":
                            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                            _.currentDirection = 0;
                            break;

                          case "right":
                          case "up":
                            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                            _.currentDirection = 1;
                            break;

                          default:
                        }
                        if (direction != "vertical") {
                            _.slideHandler(slideCount);
                            _.touchObject = {};
                            _.$slider.trigger("swipe", [ _, direction ]);
                        }
                    } else if (_.touchObject.startX !== _.touchObject.curX) {
                        _.slideHandler(_.currentSlide);
                        _.touchObject = {};
                    }
                };
                Slick.prototype.swipeHandler = function(event) {
                    var _ = this;
                    if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) return; else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) return;
                    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== void 0 ? event.originalEvent.touches.length : 1;
                    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
                    if (_.options.verticalSwiping === true) _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
                    switch (event.data.action) {
                      case "start":
                        _.swipeStart(event);
                        break;

                      case "move":
                        _.swipeMove(event);
                        break;

                      case "end":
                        _.swipeEnd(event);
                        break;
                    }
                };
                Slick.prototype.swipeMove = function(event) {
                    var curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength, _ = this;
                    touches = event.originalEvent !== void 0 ? event.originalEvent.touches : null;
                    if (!_.dragging || _.scrolling || touches && touches.length !== 1) return false;
                    curLeft = _.getLeft(_.currentSlide);
                    _.touchObject.curX = touches !== void 0 ? touches[0].pageX : event.clientX;
                    _.touchObject.curY = touches !== void 0 ? touches[0].pageY : event.clientY;
                    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
                    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
                    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
                        _.scrolling = true;
                        return false;
                    }
                    if (_.options.verticalSwiping === true) _.touchObject.swipeLength = verticalSwipeLength;
                    swipeDirection = _.swipeDirection();
                    if (event.originalEvent !== void 0 && _.touchObject.swipeLength > 4) {
                        _.swiping = true;
                        event.preventDefault();
                    }
                    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
                    if (_.options.verticalSwiping === true) positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
                    swipeLength = _.touchObject.swipeLength;
                    _.touchObject.edgeHit = false;
                    if (_.options.infinite === false) if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") {
                        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                        _.touchObject.edgeHit = true;
                    }
                    if (_.options.vertical === false) _.swipeLeft = curLeft + swipeLength * positionOffset; else _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
                    if (_.options.verticalSwiping === true) _.swipeLeft = curLeft + swipeLength * positionOffset;
                    if (_.options.fade === true || _.options.touchMove === false) return false;
                    if (_.animating === true) {
                        _.swipeLeft = null;
                        return false;
                    }
                    _.setCSS(_.swipeLeft);
                };
                Slick.prototype.swipeStart = function(event) {
                    var touches, _ = this;
                    _.interrupted = true;
                    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
                        _.touchObject = {};
                        return false;
                    }
                    if (event.originalEvent !== void 0 && event.originalEvent.touches !== void 0) touches = event.originalEvent.touches[0];
                    _.touchObject.startX = _.touchObject.curX = touches !== void 0 ? touches.pageX : event.clientX;
                    _.touchObject.startY = _.touchObject.curY = touches !== void 0 ? touches.pageY : event.clientY;
                    _.dragging = true;
                };
                Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
                    var _ = this;
                    if (_.$slidesCache !== null) {
                        _.unload();
                        _.$slideTrack.children(this.options.slide).detach();
                        _.$slidesCache.appendTo(_.$slideTrack);
                        _.reinit();
                    }
                };
                Slick.prototype.unload = function() {
                    var _ = this;
                    $(".slick-cloned", _.$slider).remove();
                    if (_.$dots) _.$dots.remove();
                    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.remove();
                    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.remove();
                    _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                };
                Slick.prototype.unslick = function(fromBreakpoint) {
                    var _ = this;
                    _.$slider.trigger("unslick", [ _, fromBreakpoint ]);
                    _.destroy();
                };
                Slick.prototype.updateArrows = function() {
                    var _ = this;
                    Math.floor(_.options.slidesToShow / 2);
                    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
                        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        if (_.currentSlide === 0) {
                            _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                            _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                            _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                            _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                            _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                            _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        }
                    }
                };
                Slick.prototype.updateDots = function() {
                    var _ = this;
                    if (_.$dots !== null) {
                        _.$dots.find("li").removeClass("slick-active").end();
                        _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active");
                    }
                };
                Slick.prototype.visibility = function() {
                    var _ = this;
                    if (_.options.autoplay) if (document[_.hidden]) _.interrupted = true; else _.interrupted = false;
                };
                $.fn.slick = function() {
                    var i, ret, _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length;
                    for (i = 0; i < l; i++) {
                        if (typeof opt == "object" || typeof opt == "undefined") _[i].slick = new Slick(_[i], opt); else ret = _[i].slick[opt].apply(_[i].slick, args);
                        if (typeof ret != "undefined") return ret;
                    }
                    return _;
                };
            });
        },
        692: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */            (function(global, factory) {
                if (true && typeof module.exports === "object") module.exports = global.document ? factory(global, true) : function(w) {
                    if (!w.document) throw new Error("jQuery requires a window with a document");
                    return factory(w);
                }; else factory(global);
            })(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
                var deletedIds = [];
                var slice = deletedIds.slice;
                var concat = deletedIds.concat;
                var push = deletedIds.push;
                var indexOf = deletedIds.indexOf;
                var class2type = {};
                var toString = class2type.toString;
                var hasOwn = class2type.hasOwnProperty;
                var support = {};
                var version = "1.11.3", jQuery = function(selector, context) {
                    return new jQuery.fn.init(selector, context);
                }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
                    return letter.toUpperCase();
                };
                jQuery.fn = jQuery.prototype = {
                    jquery: version,
                    constructor: jQuery,
                    selector: "",
                    length: 0,
                    toArray: function() {
                        return slice.call(this);
                    },
                    get: function(num) {
                        return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
                    },
                    pushStack: function(elems) {
                        var ret = jQuery.merge(this.constructor(), elems);
                        ret.prevObject = this;
                        ret.context = this.context;
                        return ret;
                    },
                    each: function(callback, args) {
                        return jQuery.each(this, callback, args);
                    },
                    map: function(callback) {
                        return this.pushStack(jQuery.map(this, function(elem, i) {
                            return callback.call(elem, i, elem);
                        }));
                    },
                    slice: function() {
                        return this.pushStack(slice.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    eq: function(i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null);
                    },
                    push,
                    sort: deletedIds.sort,
                    splice: deletedIds.splice
                };
                jQuery.extend = jQuery.fn.extend = function() {
                    var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                    if (typeof target === "boolean") {
                        deep = target;
                        target = arguments[i] || {};
                        i++;
                    }
                    if (typeof target !== "object" && !jQuery.isFunction(target)) target = {};
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for (;i < length; i++) if ((options = arguments[i]) != null) for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) continue;
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];
                            } else clone = src && jQuery.isPlainObject(src) ? src : {};
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== void 0) target[name] = copy;
                    }
                    return target;
                };
                jQuery.extend({
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    isReady: true,
                    error: function(msg) {
                        throw new Error(msg);
                    },
                    noop: function() {},
                    isFunction: function(obj) {
                        return jQuery.type(obj) === "function";
                    },
                    isArray: Array.isArray || function(obj) {
                        return jQuery.type(obj) === "array";
                    },
                    isWindow: function(obj) {
                        return obj != null && obj == obj.window;
                    },
                    isNumeric: function(obj) {
                        return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
                    },
                    isEmptyObject: function(obj) {
                        var name;
                        for (name in obj) return false;
                        return true;
                    },
                    isPlainObject: function(obj) {
                        var key;
                        if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) return false;
                        try {
                            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) return false;
                        } catch (e) {
                            return false;
                        }
                        if (support.ownLast) for (key in obj) return hasOwn.call(obj, key);
                        for (key in obj) ;
                        return key === void 0 || hasOwn.call(obj, key);
                    },
                    type: function(obj) {
                        if (obj == null) return obj + "";
                        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
                    },
                    globalEval: function(data) {
                        if (data && jQuery.trim(data)) (window.execScript || function(data) {
                            window["eval"].call(window, data);
                        })(data);
                    },
                    camelCase: function(string) {
                        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                    },
                    nodeName: function(elem, name) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                    },
                    each: function(obj, callback, args) {
                        var value, i = 0, length = obj.length, isArray = isArraylike(obj);
                        if (args) if (isArray) for (;i < length; i++) {
                            value = callback.apply(obj[i], args);
                            if (value === false) break;
                        } else for (i in obj) {
                            value = callback.apply(obj[i], args);
                            if (value === false) break;
                        } else if (isArray) for (;i < length; i++) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) break;
                        } else for (i in obj) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) break;
                        }
                        return obj;
                    },
                    trim: function(text) {
                        return text == null ? "" : (text + "").replace(rtrim, "");
                    },
                    makeArray: function(arr, results) {
                        var ret = results || [];
                        if (arr != null) if (isArraylike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr); else push.call(ret, arr);
                        return ret;
                    },
                    inArray: function(elem, arr, i) {
                        var len;
                        if (arr) {
                            if (indexOf) return indexOf.call(arr, elem, i);
                            len = arr.length;
                            i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                            for (;i < len; i++) if (i in arr && arr[i] === elem) return i;
                        }
                        return -1;
                    },
                    merge: function(first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        while (j < len) first[i++] = second[j++];
                        if (len !== len) while (second[j] !== void 0) first[i++] = second[j++];
                        first.length = i;
                        return first;
                    },
                    grep: function(elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        for (;i < length; i++) {
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                        }
                        return matches;
                    },
                    map: function(elems, callback, arg) {
                        var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
                        if (isArray) for (;i < length; i++) {
                            value = callback(elems[i], i, arg);
                            if (value != null) ret.push(value);
                        } else for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (value != null) ret.push(value);
                        }
                        return concat.apply([], ret);
                    },
                    guid: 1,
                    proxy: function(fn, context) {
                        var args, proxy, tmp;
                        if (typeof context === "string") {
                            tmp = fn[context];
                            context = fn;
                            fn = tmp;
                        }
                        if (!jQuery.isFunction(fn)) return;
                        args = slice.call(arguments, 2);
                        proxy = function() {
                            return fn.apply(context || this, args.concat(slice.call(arguments)));
                        };
                        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                        return proxy;
                    },
                    now: function() {
                        return +new Date;
                    },
                    support
                });
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                });
                function isArraylike(obj) {
                    var length = "length" in obj && obj.length, type = jQuery.type(obj);
                    if (type === "function" || jQuery.isWindow(obj)) return false;
                    if (obj.nodeType === 1 && length) return true;
                    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
                }
                var Sizzle = 
                /*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
                function(window) {
                    var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
                        if (a === b) hasDuplicate = true;
                        return 0;
                    }, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                        var i = 0, len = list.length;
                        for (;i < len; i++) if (list[i] === elem) return i;
                        return -1;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        ID: new RegExp("^#(" + characterEncoding + ")"),
                        CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
                        TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
                        var high = "0x" + escaped - 65536;
                        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
                    }, unloadHandler = function() {
                        setDocument();
                    };
                    try {
                        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: arr.length ? function(target, els) {
                                push_native.apply(target, slice.call(els));
                            } : function(target, els) {
                                var j = target.length, i = 0;
                                while (target[j++] = els[i++]) ;
                                target.length = j - 1;
                            }
                        };
                    }
                    function Sizzle(selector, context, results, seed) {
                        var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                        if ((context ? context.ownerDocument || context : preferredDoc) !== document) setDocument(context);
                        context = context || document;
                        results = results || [];
                        nodeType = context.nodeType;
                        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
                        if (!seed && documentIsHTML) {
                            if (nodeType !== 11 && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                                if (nodeType === 9) {
                                    elem = context.getElementById(m);
                                    if (elem && elem.parentNode) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else return results;
                                } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;
                            } else if ((m = match[3]) && support.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                            if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                                nid = old = expando;
                                newContext = context;
                                newSelector = nodeType !== 1 && selector;
                                if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                                    groups = tokenize(selector);
                                    if (old = context.getAttribute("id")) nid = old.replace(rescape, "\\$&"); else context.setAttribute("id", nid);
                                    nid = "[id='" + nid + "'] ";
                                    i = groups.length;
                                    while (i--) groups[i] = nid + toSelector(groups[i]);
                                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                    newSelector = groups.join(",");
                                }
                                if (newSelector) try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results;
                                } catch (qsaError) {} finally {
                                    if (!old) context.removeAttribute("id");
                                }
                            }
                        }
                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }
                    function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            if (keys.push(key + " ") > Expr.cacheLength) delete cache[keys.shift()];
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    function assert(fn) {
                        var div = document.createElement("div");
                        try {
                            return !!fn(div);
                        } catch (e) {
                            return false;
                        } finally {
                            if (div.parentNode) div.parentNode.removeChild(div);
                            div = null;
                        }
                    }
                    function addHandle(attrs, handler) {
                        var arr = attrs.split("|"), i = attrs.length;
                        while (i--) Expr.attrHandle[arr[i]] = handler;
                    }
                    function siblingCheck(a, b) {
                        var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                        if (diff) return diff;
                        if (cur) while (cur = cur.nextSibling) if (cur === b) return -1;
                        return a ? 1 : -1;
                    }
                    function createInputPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === type;
                        };
                    }
                    function createButtonPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return (name === "input" || name === "button") && elem.type === type;
                        };
                    }
                    function createPositionalPseudo(fn) {
                        return markFunction(function(argument) {
                            argument = +argument;
                            return markFunction(function(seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                            });
                        });
                    }
                    function testContext(context) {
                        return context && typeof context.getElementsByTagName !== "undefined" && context;
                    }
                    support = Sizzle.support = {};
                    isXML = Sizzle.isXML = function(elem) {
                        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                        return documentElement ? documentElement.nodeName !== "HTML" : false;
                    };
                    setDocument = Sizzle.setDocument = function(node) {
                        var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) return document;
                        document = doc;
                        docElem = doc.documentElement;
                        parent = doc.defaultView;
                        if (parent && parent !== parent.top) if (parent.addEventListener) parent.addEventListener("unload", unloadHandler, false); else if (parent.attachEvent) parent.attachEvent("onunload", unloadHandler);
                        documentIsHTML = !isXML(doc);
                        support.attributes = assert(function(div) {
                            div.className = "i";
                            return !div.getAttribute("className");
                        });
                        support.getElementsByTagName = assert(function(div) {
                            div.appendChild(doc.createComment(""));
                            return !div.getElementsByTagName("*").length;
                        });
                        support.getElementsByClassName = rnative.test(doc.getElementsByClassName);
                        support.getById = assert(function(div) {
                            docElem.appendChild(div).id = expando;
                            return !doc.getElementsByName || !doc.getElementsByName(expando).length;
                        });
                        if (support.getById) {
                            Expr.find["ID"] = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var m = context.getElementById(id);
                                    return m && m.parentNode ? [ m ] : [];
                                }
                            };
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                        } else {
                            delete Expr.find["ID"];
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                        }
                        Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                            if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag); else if (support.qsa) return context.querySelectorAll(tag);
                        } : function(tag, context) {
                            var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                            if (tag === "*") {
                                while (elem = results[i++]) if (elem.nodeType === 1) tmp.push(elem);
                                return tmp;
                            }
                            return results;
                        };
                        Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                            if (documentIsHTML) return context.getElementsByClassName(className);
                        };
                        rbuggyMatches = [];
                        rbuggyQSA = [];
                        if (support.qsa = rnative.test(doc.querySelectorAll)) {
                            assert(function(div) {
                                docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
                                if (div.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                if (!div.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                if (!div.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                                if (!div.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                                if (!div.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                            });
                            assert(function(div) {
                                var input = doc.createElement("input");
                                input.setAttribute("type", "hidden");
                                div.appendChild(input).setAttribute("name", "D");
                                if (div.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                if (!div.querySelectorAll(":enabled").length) rbuggyQSA.push(":enabled", ":disabled");
                                div.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            });
                        }
                        if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert(function(div) {
                            support.disconnectedMatch = matches.call(div, "div");
                            matches.call(div, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos);
                        });
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                        hasCompare = rnative.test(docElem.compareDocumentPosition);
                        contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                            var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                        } : function(a, b) {
                            if (b) while (b = b.parentNode) if (b === a) return true;
                            return false;
                        };
                        sortOrder = hasCompare ? function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) return compare;
                            compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) return -1;
                                if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) return 1;
                                return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                            }
                            return compare & 4 ? -1 : 1;
                        } : function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                            if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; else if (aup === bup) return siblingCheck(a, b);
                            cur = a;
                            while (cur = cur.parentNode) ap.unshift(cur);
                            cur = b;
                            while (cur = cur.parentNode) bp.unshift(cur);
                            while (ap[i] === bp[i]) i++;
                            return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                        };
                        return doc;
                    };
                    Sizzle.matches = function(expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };
                    Sizzle.matchesSelector = function(elem, expr) {
                        if ((elem.ownerDocument || elem) !== document) setDocument(elem);
                        expr = expr.replace(rattributeQuotes, "='$1']");
                        if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) return ret;
                        } catch (e) {}
                        return Sizzle(expr, document, null, [ elem ]).length > 0;
                    };
                    Sizzle.contains = function(context, elem) {
                        if ((context.ownerDocument || context) !== document) setDocument(context);
                        return contains(context, elem);
                    };
                    Sizzle.attr = function(elem, name) {
                        if ((elem.ownerDocument || elem) !== document) setDocument(elem);
                        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                        return val !== void 0 ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    };
                    Sizzle.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    Sizzle.uniqueSort = function(results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
                            while (j--) results.splice(duplicates[j], 1);
                        }
                        sortInput = null;
                        return results;
                    };
                    getText = Sizzle.getText = function(elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) while (node = elem[i++]) ret += getText(node); else if (nodeType === 1 || nodeType === 9 || nodeType === 11) if (typeof elem.textContent === "string") return elem.textContent; else for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem); else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
                        return ret;
                    };
                    Expr = Sizzle.selectors = {
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(match) {
                                match[1] = match[1].replace(runescape, funescape);
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if (match[2] === "~=") match[3] = " " + match[3] + " ";
                                return match.slice(0, 4);
                            },
                            CHILD: function(match) {
                                match[1] = match[1].toLowerCase();
                                if (match[1].slice(0, 3) === "nth") {
                                    if (!match[3]) Sizzle.error(match[0]);
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                    match[5] = +(match[7] + match[8] || match[3] === "odd");
                                } else if (match[3]) Sizzle.error(match[0]);
                                return match;
                            },
                            PSEUDO: function(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr["CHILD"].test(match[0])) return null;
                                if (match[3]) match[2] = match[4] || match[5] || ""; else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            TAG: function(nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return nodeNameSelector === "*" ? function() {
                                    return true;
                                } : function(elem) {
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                            },
                            CLASS: function(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                                    return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                                });
                            },
                            ATTR: function(name, operator, check) {
                                return function(elem) {
                                    var result = Sizzle.attr(elem, name);
                                    if (result == null) return operator === "!=";
                                    if (!operator) return true;
                                    result += "";
                                    return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                                };
                            },
                            CHILD: function(type, what, argument, first, last) {
                                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                                return first === 1 && last === 0 ? function(elem) {
                                    return !!elem.parentNode;
                                } : function(elem, context, xml) {
                                    var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                                    if (parent) {
                                        if (simple) {
                                            while (dir) {
                                                node = elem;
                                                while (node = node[dir]) if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return false;
                                                start = dir = type === "only" && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [ forward ? parent.firstChild : parent.lastChild ];
                                        if (forward && useCache) {
                                            outerCache = parent[expando] || (parent[expando] = {});
                                            cache = outerCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = cache[0] === dirruns && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (node.nodeType === 1 && ++diff && node === elem) {
                                                outerCache[type] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1]; else while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                            if (useCache) (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                            if (node === elem) break;
                                        }
                                        diff -= last;
                                        return diff === first || diff % first === 0 && diff / first >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(pseudo, argument) {
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                                if (fn[expando]) return fn(argument);
                                if (fn.length > 1) {
                                    args = [ pseudo, pseudo, "", argument ];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                        var idx, matched = fn(seed, argument), i = matched.length;
                                        while (i--) {
                                            idx = indexOf(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    }) : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            not: markFunction(function(selector) {
                                var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                                return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                    while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                                }) : function(elem, context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    input[0] = null;
                                    return !results.pop();
                                };
                            }),
                            has: markFunction(function(selector) {
                                return function(elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            }),
                            contains: markFunction(function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                                };
                            }),
                            lang: markFunction(function(lang) {
                                if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                        }
                                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                    return false;
                                };
                            }),
                            target: function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            root: function(elem) {
                                return elem === docElem;
                            },
                            focus: function(elem) {
                                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            enabled: function(elem) {
                                return elem.disabled === false;
                            },
                            disabled: function(elem) {
                                return elem.disabled === true;
                            },
                            checked: function(elem) {
                                var nodeName = elem.nodeName.toLowerCase();
                                return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                            },
                            selected: function(elem) {
                                if (elem.parentNode) elem.parentNode.selectedIndex;
                                return elem.selected === true;
                            },
                            empty: function(elem) {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
                                return true;
                            },
                            parent: function(elem) {
                                return !Expr.pseudos["empty"](elem);
                            },
                            header: function(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            input: function(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            button: function(elem) {
                                var name = elem.nodeName.toLowerCase();
                                return name === "input" && elem.type === "button" || name === "button";
                            },
                            text: function(elem) {
                                var attr;
                                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                            },
                            first: createPositionalPseudo(function() {
                                return [ 0 ];
                            }),
                            last: createPositionalPseudo(function(matchIndexes, length) {
                                return [ length - 1 ];
                            }),
                            eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                                return [ argument < 0 ? argument + length : argument ];
                            }),
                            even: createPositionalPseudo(function(matchIndexes, length) {
                                var i = 0;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            }),
                            odd: createPositionalPseudo(function(matchIndexes, length) {
                                var i = 1;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            }),
                            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (;--i >= 0; ) matchIndexes.push(i);
                                return matchIndexes;
                            }),
                            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (;++i < length; ) matchIndexes.push(i);
                                return matchIndexes;
                            })
                        }
                    };
                    Expr.pseudos["nth"] = Expr.pseudos["eq"];
                    for (i in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    }) Expr.pseudos[i] = createInputPseudo(i);
                    for (i in {
                        submit: true,
                        reset: true
                    }) Expr.pseudos[i] = createButtonPseudo(i);
                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters;
                    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) {
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) soFar = soFar.slice(match[0].length) || soFar;
                                groups.push(tokens = []);
                            }
                            matched = false;
                            if (match = rcombinators.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            for (type in Expr.filter) if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            if (!matched) break;
                        }
                        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                    };
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for (;i < len; i++) selector += tokens[i].value;
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
                        return combinator.first ? function(elem, context, xml) {
                            while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                        } : function(elem, context, xml) {
                            var oldCache, outerCache, newCache = [ dirruns, doneName ];
                            if (xml) {
                                while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) if (matcher(elem, context, xml)) return true;
                            } else while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; else {
                                    outerCache[dir] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) return true;
                                }
                            }
                        };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function(elem, context, xml) {
                            var i = matchers.length;
                            while (i--) if (!matchers[i](elem, context, xml)) return false;
                            return true;
                        } : matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for (;i < len; i++) Sizzle(selector, contexts[i], results);
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                        for (;i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) map.push(i);
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                        if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                        return markFunction(function(seed, results, context, xml) {
                            var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                            if (matcher) matcher(matcherIn, matcherOut, context, xml);
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                i = temp.length;
                                while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
                                        postFinder(null, matcherOut = [], temp, xml);
                                    }
                                    i = matcherOut.length;
                                    while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                                }
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) postFinder(null, results, matcherOut, xml); else push.apply(results, matcherOut);
                            }
                        });
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                            return elem === checkContext;
                        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                            return indexOf(checkContext, elem) > -1;
                        }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            checkContext = null;
                            return ret;
                        } ];
                        for (;i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (;j < len; j++) if (Expr.relative[tokens[j].type]) break;
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: tokens[i - 2].type === " " ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                            if (outermost) outermostContext = context !== document && context;
                            for (;i !== len && (elem = elems[i]) != null; i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    while (matcher = elementMatchers[j++]) if (matcher(elem, context, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                    if (outermost) dirruns = dirrunsUnique;
                                }
                                if (bySet) {
                                    if (elem = !matcher && elem) matchedCount--;
                                    if (seed) unmatched.push(elem);
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0) while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                    setMatched = condense(setMatched);
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    compile = Sizzle.compile = function(selector, match) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            if (!match) match = tokenize(selector);
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) setMatchers.push(cached); else elementMatchers.push(cached);
                            }
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            cached.selector = selector;
                        }
                        return cached;
                    };
                    select = Sizzle.select = function(selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || [];
                        if (match.length === 1) {
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) return results; else if (compiled) context = context.parentNode;
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                if (Expr.relative[type = token.type]) break;
                                if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    };
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    support.detectDuplicates = !!hasDuplicate;
                    setDocument();
                    support.sortDetached = assert(function(div1) {
                        return div1.compareDocumentPosition(document.createElement("div")) & 1;
                    });
                    if (!assert(function(div) {
                        div.innerHTML = "<a href='#'></a>";
                        return div.firstChild.getAttribute("href") === "#";
                    })) addHandle("type|href|height|width", function(elem, name, isXML) {
                        if (!isXML) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    });
                    if (!support.attributes || !assert(function(div) {
                        div.innerHTML = "<input/>";
                        div.firstChild.setAttribute("value", "");
                        return div.firstChild.getAttribute("value") === "";
                    })) addHandle("value", function(elem, name, isXML) {
                        if (!isXML && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
                    });
                    if (!assert(function(div) {
                        return div.getAttribute("disabled") == null;
                    })) addHandle(booleans, function(elem, name, isXML) {
                        var val;
                        if (!isXML) return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    });
                    return Sizzle;
                }(window);
                jQuery.find = Sizzle;
                jQuery.expr = Sizzle.selectors;
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.unique = Sizzle.uniqueSort;
                jQuery.text = Sizzle.getText;
                jQuery.isXMLDoc = Sizzle.isXML;
                jQuery.contains = Sizzle.contains;
                var rneedsContext = jQuery.expr.match.needsContext;
                var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
                var risSimple = /^.[^:#\[\.,]*$/;
                function winnow(elements, qualifier, not) {
                    if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    });
                    if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
                        return elem === qualifier !== not;
                    });
                    if (typeof qualifier === "string") {
                        if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
                        qualifier = jQuery.filter(qualifier, elements);
                    }
                    return jQuery.grep(elements, function(elem) {
                        return jQuery.inArray(elem, qualifier) >= 0 !== not;
                    });
                }
                jQuery.filter = function(expr, elems, not) {
                    var elem = elems[0];
                    if (not) expr = ":not(" + expr + ")";
                    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                        return elem.nodeType === 1;
                    }));
                };
                jQuery.fn.extend({
                    find: function(selector) {
                        var i, ret = [], self = this, len = self.length;
                        if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                            for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
                        }));
                        for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                        ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                        ret.selector = this.selector ? this.selector + " " + selector : selector;
                        return ret;
                    },
                    filter: function(selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function(selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function(selector) {
                        return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                    }
                });
                var rootjQuery, document = window.document, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context) {
                    var match, elem;
                    if (!selector) return this;
                    if (typeof selector === "string") {
                        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) match = [ null, selector, null ]; else match = rquickExpr.exec(selector);
                        if (match && (match[1] || !context)) if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (jQuery.isFunction(this[match])) this[match](context[match]); else this.attr(match, context[match]);
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem && elem.parentNode) {
                                if (elem.id !== match[2]) return rootjQuery.find(selector);
                                this.length = 1;
                                this[0] = elem;
                            }
                            this.context = document;
                            this.selector = selector;
                            return this;
                        } else if (!context || context.jquery) return (context || rootjQuery).find(selector); else return this.constructor(context).find(selector);
                    } else if (selector.nodeType) {
                        this.context = this[0] = selector;
                        this.length = 1;
                        return this;
                    } else if (jQuery.isFunction(selector)) return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
                    if (selector.selector !== void 0) {
                        this.selector = selector.selector;
                        this.context = selector.context;
                    }
                    return jQuery.makeArray(selector, this);
                };
                init.prototype = jQuery.fn;
                rootjQuery = jQuery(document);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.extend({
                    dir: function(elem, dir, until) {
                        var matched = [], cur = elem[dir];
                        while (cur && cur.nodeType !== 9 && (until === void 0 || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                            if (cur.nodeType === 1) matched.push(cur);
                            cur = cur[dir];
                        }
                        return matched;
                    },
                    sibling: function(n, elem) {
                        var r = [];
                        for (;n; n = n.nextSibling) if (n.nodeType === 1 && n !== elem) r.push(n);
                        return r;
                    }
                });
                jQuery.fn.extend({
                    has: function(target) {
                        var i, targets = jQuery(target, this), len = targets.length;
                        return this.filter(function() {
                            for (i = 0; i < len; i++) if (jQuery.contains(this, targets[i])) return true;
                        });
                    },
                    closest: function(selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                        for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
                    },
                    index: function(elem) {
                        if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        if (typeof elem === "string") return jQuery.inArray(this[0], jQuery(elem));
                        return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
                    },
                    add: function(selector, context) {
                        return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function(selector) {
                        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    do {
                        cur = cur[dir];
                    } while (cur && cur.nodeType !== 1);
                    return cur;
                }
                jQuery.each({
                    parent: function(elem) {
                        var parent = elem.parentNode;
                        return parent && parent.nodeType !== 11 ? parent : null;
                    },
                    parents: function(elem) {
                        return jQuery.dir(elem, "parentNode");
                    },
                    parentsUntil: function(elem, i, until) {
                        return jQuery.dir(elem, "parentNode", until);
                    },
                    next: function(elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function(elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function(elem) {
                        return jQuery.dir(elem, "nextSibling");
                    },
                    prevAll: function(elem) {
                        return jQuery.dir(elem, "previousSibling");
                    },
                    nextUntil: function(elem, i, until) {
                        return jQuery.dir(elem, "nextSibling", until);
                    },
                    prevUntil: function(elem, i, until) {
                        return jQuery.dir(elem, "previousSibling", until);
                    },
                    siblings: function(elem) {
                        return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
                    },
                    children: function(elem) {
                        return jQuery.sibling(elem.firstChild);
                    },
                    contents: function(elem) {
                        return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
                    }
                }, function(name, fn) {
                    jQuery.fn[name] = function(until, selector) {
                        var ret = jQuery.map(this, fn, until);
                        if (name.slice(-5) !== "Until") selector = until;
                        if (selector && typeof selector === "string") ret = jQuery.filter(selector, ret);
                        if (this.length > 1) {
                            if (!guaranteedUnique[name]) ret = jQuery.unique(ret);
                            if (rparentsprev.test(name)) ret = ret.reverse();
                        }
                        return this.pushStack(ret);
                    };
                });
                var rnotwhite = /\S+/g;
                var optionsCache = {};
                function createOptions(options) {
                    var object = optionsCache[options] = {};
                    jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
                        object[flag] = true;
                    });
                    return object;
                }
                jQuery.Callbacks = function(options) {
                    options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
                    var firing, memory, fired, firingLength, firingIndex, firingStart, list = [], stack = !options.once && [], fire = function(data) {
                        memory = options.memory && data;
                        fired = true;
                        firingIndex = firingStart || 0;
                        firingStart = 0;
                        firingLength = list.length;
                        firing = true;
                        for (;list && firingIndex < firingLength; firingIndex++) if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                            memory = false;
                            break;
                        }
                        firing = false;
                        if (list) if (stack) {
                            if (stack.length) fire(stack.shift());
                        } else if (memory) list = []; else self.disable();
                    }, self = {
                        add: function() {
                            if (list) {
                                var start = list.length;
                                (function add(args) {
                                    jQuery.each(args, function(_, arg) {
                                        var type = jQuery.type(arg);
                                        if (type === "function") {
                                            if (!options.unique || !self.has(arg)) list.push(arg);
                                        } else if (arg && arg.length && type !== "string") add(arg);
                                    });
                                })(arguments);
                                if (firing) firingLength = list.length; else if (memory) {
                                    firingStart = start;
                                    fire(memory);
                                }
                            }
                            return this;
                        },
                        remove: function() {
                            if (list) jQuery.each(arguments, function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    if (firing) {
                                        if (index <= firingLength) firingLength--;
                                        if (index <= firingIndex) firingIndex--;
                                    }
                                }
                            });
                            return this;
                        },
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
                        },
                        empty: function() {
                            list = [];
                            firingLength = 0;
                            return this;
                        },
                        disable: function() {
                            list = stack = memory = void 0;
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },
                        lock: function() {
                            stack = void 0;
                            if (!memory) self.disable();
                            return this;
                        },
                        locked: function() {
                            return !stack;
                        },
                        fireWith: function(context, args) {
                            if (list && (!fired || stack)) {
                                args = args || [];
                                args = [ context, args.slice ? args.slice() : args ];
                                if (firing) stack.push(args); else fire(args);
                            }
                            return this;
                        },
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        fired: function() {
                            return !!fired;
                        }
                    };
                    return self;
                };
                jQuery.extend({
                    Deferred: function(func) {
                        var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            then: function() {
                                var fns = arguments;
                                return jQuery.Deferred(function(newDefer) {
                                    jQuery.each(tuples, function(i, tuple) {
                                        var fn = jQuery.isFunction(fns[i]) && fns[i];
                                        deferred[tuple[1]](function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && jQuery.isFunction(returned.promise)) returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify); else newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                        });
                                    });
                                    fns = null;
                                }).promise();
                            },
                            promise: function(obj) {
                                return obj != null ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred = {};
                        promise.pipe = promise.then;
                        jQuery.each(tuples, function(i, tuple) {
                            var list = tuple[2], stateString = tuple[3];
                            promise[tuple[1]] = list.add;
                            if (stateString) list.add(function() {
                                state = stateString;
                            }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                            deferred[tuple[0]] = function() {
                                deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                                return this;
                            };
                            deferred[tuple[0] + "With"] = list.fireWith;
                        });
                        promise.promise(deferred);
                        if (func) func.call(deferred, deferred);
                        return deferred;
                    },
                    when: function(subordinate) {
                        var progressValues, progressContexts, resolveContexts, i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                            return function(value) {
                                contexts[i] = this;
                                values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (values === progressValues) deferred.notifyWith(contexts, values); else if (! --remaining) deferred.resolveWith(contexts, values);
                            };
                        };
                        if (length > 1) {
                            progressValues = new Array(length);
                            progressContexts = new Array(length);
                            resolveContexts = new Array(length);
                            for (;i < length; i++) if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)); else --remaining;
                        }
                        if (!remaining) deferred.resolveWith(resolveContexts, resolveValues);
                        return deferred.promise();
                    }
                });
                var readyList;
                jQuery.fn.ready = function(fn) {
                    jQuery.ready.promise().done(fn);
                    return this;
                };
                jQuery.extend({
                    isReady: false,
                    readyWait: 1,
                    holdReady: function(hold) {
                        if (hold) jQuery.readyWait++; else jQuery.ready(true);
                    },
                    ready: function(wait) {
                        if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
                        if (!document.body) return setTimeout(jQuery.ready);
                        jQuery.isReady = true;
                        if (wait !== true && --jQuery.readyWait > 0) return;
                        readyList.resolveWith(document, [ jQuery ]);
                        if (jQuery.fn.triggerHandler) {
                            jQuery(document).triggerHandler("ready");
                            jQuery(document).off("ready");
                        }
                    }
                });
                function detach() {
                    if (document.addEventListener) {
                        document.removeEventListener("DOMContentLoaded", completed, false);
                        window.removeEventListener("load", completed, false);
                    } else {
                        document.detachEvent("onreadystatechange", completed);
                        window.detachEvent("onload", completed);
                    }
                }
                function completed() {
                    if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
                        detach();
                        jQuery.ready();
                    }
                }
                jQuery.ready.promise = function(obj) {
                    if (!readyList) {
                        readyList = jQuery.Deferred();
                        if (document.readyState === "complete") setTimeout(jQuery.ready); else if (document.addEventListener) {
                            document.addEventListener("DOMContentLoaded", completed, false);
                            window.addEventListener("load", completed, false);
                        } else {
                            document.attachEvent("onreadystatechange", completed);
                            window.attachEvent("onload", completed);
                            var top = false;
                            try {
                                top = window.frameElement == null && document.documentElement;
                            } catch (e) {}
                            if (top && top.doScroll) (function doScrollCheck() {
                                if (!jQuery.isReady) {
                                    try {
                                        top.doScroll("left");
                                    } catch (e) {
                                        return setTimeout(doScrollCheck, 50);
                                    }
                                    detach();
                                    jQuery.ready();
                                }
                            })();
                        }
                    }
                    return readyList.promise(obj);
                };
                var strundefined = typeof void 0;
                var i;
                for (i in jQuery(support)) break;
                support.ownLast = i !== "0";
                support.inlineBlockNeedsLayout = false;
                jQuery(function() {
                    var val, div, body, container;
                    body = document.getElementsByTagName("body")[0];
                    if (!body || !body.style) return;
                    div = document.createElement("div");
                    container = document.createElement("div");
                    container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                    body.appendChild(container).appendChild(div);
                    if (typeof div.style.zoom !== strundefined) {
                        div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
                        support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
                        if (val) body.style.zoom = 1;
                    }
                    body.removeChild(container);
                });
                (function() {
                    var div = document.createElement("div");
                    if (support.deleteExpando == null) {
                        support.deleteExpando = true;
                        try {
                            delete div.test;
                        } catch (e) {
                            support.deleteExpando = false;
                        }
                    }
                    div = null;
                })();
                jQuery.acceptData = function(elem) {
                    var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()], nodeType = +elem.nodeType || 1;
                    return nodeType !== 1 && nodeType !== 9 ? false : !noData || noData !== true && elem.getAttribute("classid") === noData;
                };
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
                function dataAttr(elem, key, data) {
                    if (data === void 0 && elem.nodeType === 1) {
                        var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
                        data = elem.getAttribute(name);
                        if (typeof data === "string") {
                            try {
                                data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                            } catch (e) {}
                            jQuery.data(elem, key, data);
                        } else data = void 0;
                    }
                    return data;
                }
                function isEmptyDataObject(obj) {
                    var name;
                    for (name in obj) {
                        if (name === "data" && jQuery.isEmptyObject(obj[name])) continue;
                        if (name !== "toJSON") return false;
                    }
                    return true;
                }
                function internalData(elem, name, data, pvt) {
                    if (!jQuery.acceptData(elem)) return;
                    var ret, thisCache, internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
                    if ((!id || !cache[id] || !pvt && !cache[id].data) && data === void 0 && typeof name === "string") return;
                    if (!id) if (isNode) id = elem[internalKey] = deletedIds.pop() || jQuery.guid++; else id = internalKey;
                    if (!cache[id]) cache[id] = isNode ? {} : {
                        toJSON: jQuery.noop
                    };
                    if (typeof name === "object" || typeof name === "function") if (pvt) cache[id] = jQuery.extend(cache[id], name); else cache[id].data = jQuery.extend(cache[id].data, name);
                    thisCache = cache[id];
                    if (!pvt) {
                        if (!thisCache.data) thisCache.data = {};
                        thisCache = thisCache.data;
                    }
                    if (data !== void 0) thisCache[jQuery.camelCase(name)] = data;
                    if (typeof name === "string") {
                        ret = thisCache[name];
                        if (ret == null) ret = thisCache[jQuery.camelCase(name)];
                    } else ret = thisCache;
                    return ret;
                }
                function internalRemoveData(elem, name, pvt) {
                    if (!jQuery.acceptData(elem)) return;
                    var thisCache, i, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
                    if (!cache[id]) return;
                    if (name) {
                        thisCache = pvt ? cache[id] : cache[id].data;
                        if (thisCache) {
                            if (!jQuery.isArray(name)) if (name in thisCache) name = [ name ]; else {
                                name = jQuery.camelCase(name);
                                if (name in thisCache) name = [ name ]; else name = name.split(" ");
                            } else name = name.concat(jQuery.map(name, jQuery.camelCase));
                            i = name.length;
                            while (i--) delete thisCache[name[i]];
                            if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) return;
                        }
                    }
                    if (!pvt) {
                        delete cache[id].data;
                        if (!isEmptyDataObject(cache[id])) return;
                    }
                    if (isNode) jQuery.cleanData([ elem ], true); else if (support.deleteExpando || cache != cache.window) delete cache[id]; else cache[id] = null;
                }
                jQuery.extend({
                    cache: {},
                    noData: {
                        "applet ": true,
                        "embed ": true,
                        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                    },
                    hasData: function(elem) {
                        elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
                        return !!elem && !isEmptyDataObject(elem);
                    },
                    data: function(elem, name, data) {
                        return internalData(elem, name, data);
                    },
                    removeData: function(elem, name) {
                        return internalRemoveData(elem, name);
                    },
                    _data: function(elem, name, data) {
                        return internalData(elem, name, data, true);
                    },
                    _removeData: function(elem, name) {
                        return internalRemoveData(elem, name, true);
                    }
                });
                jQuery.fn.extend({
                    data: function(key, value) {
                        var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                        if (key === void 0) {
                            if (this.length) {
                                data = jQuery.data(elem);
                                if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                                    i = attrs.length;
                                    while (i--) if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (name.indexOf("data-") === 0) {
                                            name = jQuery.camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                    jQuery._data(elem, "parsedAttrs", true);
                                }
                            }
                            return data;
                        }
                        if (typeof key === "object") return this.each(function() {
                            jQuery.data(this, key);
                        });
                        return arguments.length > 1 ? this.each(function() {
                            jQuery.data(this, key, value);
                        }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : void 0;
                    },
                    removeData: function(key) {
                        return this.each(function() {
                            jQuery.removeData(this, key);
                        });
                    }
                });
                jQuery.extend({
                    queue: function(elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = jQuery._data(elem, type);
                            if (data) if (!queue || jQuery.isArray(data)) queue = jQuery._data(elem, type, jQuery.makeArray(data)); else queue.push(data);
                            return queue || [];
                        }
                    },
                    dequeue: function(elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                            jQuery.dequeue(elem, type);
                        };
                        if (fn === "inprogress") {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            if (type === "fx") queue.unshift("inprogress");
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) hooks.empty.fire();
                    },
                    _queueHooks: function(elem, type) {
                        var key = type + "queueHooks";
                        return jQuery._data(elem, key) || jQuery._data(elem, key, {
                            empty: jQuery.Callbacks("once memory").add(function() {
                                jQuery._removeData(elem, type + "queue");
                                jQuery._removeData(elem, key);
                            })
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        if (typeof type !== "string") {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) return jQuery.queue(this[0], type);
                        return data === void 0 ? this : this.each(function() {
                            var queue = jQuery.queue(this, type, data);
                            jQuery._queueHooks(this, type);
                            if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
                        });
                    },
                    dequeue: function(type) {
                        return this.each(function() {
                            jQuery.dequeue(this, type);
                        });
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", []);
                    },
                    promise: function(type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                            if (! --count) defer.resolveWith(elements, [ elements ]);
                        };
                        if (typeof type !== "string") {
                            obj = type;
                            type = void 0;
                        }
                        type = type || "fx";
                        while (i--) {
                            tmp = jQuery._data(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
                var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
                var isHidden = function(elem, el) {
                    elem = el || elem;
                    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
                };
                var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0, length = elems.length, bulk = key == null;
                    if (jQuery.type(key) === "object") {
                        chainable = true;
                        for (i in key) jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                    } else if (value !== void 0) {
                        chainable = true;
                        if (!jQuery.isFunction(value)) raw = true;
                        if (bulk) if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            bulk = fn;
                            fn = function(elem, key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                        if (fn) for (;i < length; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                    return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
                };
                var rcheckableType = /^(?:checkbox|radio)$/i;
                (function() {
                    var input = document.createElement("input"), div = document.createElement("div"), fragment = document.createDocumentFragment();
                    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                    support.leadingWhitespace = div.firstChild.nodeType === 3;
                    support.tbody = !div.getElementsByTagName("tbody").length;
                    support.htmlSerialize = !!div.getElementsByTagName("link").length;
                    support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
                    input.type = "checkbox";
                    input.checked = true;
                    fragment.appendChild(input);
                    support.appendChecked = input.checked;
                    div.innerHTML = "<textarea>x</textarea>";
                    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    fragment.appendChild(div);
                    div.innerHTML = "<input type='radio' checked='checked' name='t'/>";
                    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    support.noCloneEvent = true;
                    if (div.attachEvent) {
                        div.attachEvent("onclick", function() {
                            support.noCloneEvent = false;
                        });
                        div.cloneNode(true).click();
                    }
                    if (support.deleteExpando == null) {
                        support.deleteExpando = true;
                        try {
                            delete div.test;
                        } catch (e) {
                            support.deleteExpando = false;
                        }
                    }
                })();
                (function() {
                    var i, eventName, div = document.createElement("div");
                    for (i in {
                        submit: true,
                        change: true,
                        focusin: true
                    }) {
                        eventName = "on" + i;
                        if (!(support[i + "Bubbles"] = eventName in window)) {
                            div.setAttribute(eventName, "t");
                            support[i + "Bubbles"] = div.attributes[eventName].expando === false;
                        }
                    }
                    div = null;
                })();
                var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                function safeActiveElement() {
                    try {
                        return document.activeElement;
                    } catch (err) {}
                }
                jQuery.event = {
                    global: {},
                    add: function(elem, types, handler, data, selector) {
                        var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
                        if (!elemData) return;
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        if (!handler.guid) handler.guid = jQuery.guid++;
                        if (!(events = elemData.events)) events = elemData.events = {};
                        if (!(eventHandle = elemData.handle)) {
                            eventHandle = elemData.handle = function(e) {
                                return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : void 0;
                            };
                            eventHandle.elem = elem;
                        }
                        types = (types || "").match(rnotwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) continue;
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            special = jQuery.event.special[type] || {};
                            handleObj = jQuery.extend({
                                type,
                                origType,
                                data,
                                handler,
                                guid: handler.guid,
                                selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) if (elem.addEventListener) elem.addEventListener(type, eventHandle, false); else if (elem.attachEvent) elem.attachEvent("on" + type, eventHandle);
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                            }
                            if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj); else handlers.push(handleObj);
                            jQuery.event.global[type] = true;
                        }
                        elem = null;
                    },
                    remove: function(elem, types, handler, selector, mappedTypes) {
                        var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
                        if (!elemData || !(events = elemData.events)) return;
                        types = (types || "").match(rnotwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) {
                                for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                continue;
                            }
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            origCount = j = handlers.length;
                            while (j--) {
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) handlers.delegateCount--;
                                    if (special.remove) special.remove.call(elem, handleObj);
                                }
                            }
                            if (origCount && !handlers.length) {
                                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                                delete events[type];
                            }
                        }
                        if (jQuery.isEmptyObject(events)) {
                            delete elemData.handle;
                            jQuery._removeData(elem, "events");
                        }
                    },
                    trigger: function(event, data, elem, onlyHandlers) {
                        var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = tmp = elem = elem || document;
                        if (elem.nodeType === 3 || elem.nodeType === 8) return;
                        if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                        if (type.indexOf(".") >= 0) {
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        event.result = void 0;
                        if (!event.target) event.target = elem;
                        data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
                        special = jQuery.event.special[type] || {};
                        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
                        if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                            for (;cur; cur = cur.parentNode) {
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        i = 0;
                        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                            event.type = i > 1 ? bubbleType : special.bindType || type;
                            handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                            if (handle) handle.apply(cur, data);
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && jQuery.acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (event.result === false) event.preventDefault();
                            }
                        }
                        event.type = type;
                        if (!onlyHandlers && !event.isDefaultPrevented()) if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) elem[ontype] = null;
                            jQuery.event.triggered = type;
                            try {
                                elem[type]();
                            } catch (e) {}
                            jQuery.event.triggered = void 0;
                            if (tmp) elem[ontype] = tmp;
                        }
                        return event.result;
                    },
                    dispatch: function(event) {
                        event = jQuery.event.fix(event);
                        var i, ret, handleObj, matched, j, handlerQueue = [], args = slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
                        args[0] = event;
                        event.delegateTarget = this;
                        if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        i = 0;
                        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                            event.currentTarget = matched.elem;
                            j = 0;
                            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (ret !== void 0) if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                        if (special.postDispatch) special.postDispatch.call(this, event);
                        return event.result;
                    },
                    handlers: function(event, handlers) {
                        var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) for (;cur != this; cur = cur.parentNode || this) if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                            matches = [];
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matches[sel] === void 0) matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                                if (matches[sel]) matches.push(handleObj);
                            }
                            if (matches.length) handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                        if (delegateCount < handlers.length) handlerQueue.push({
                            elem: this,
                            handlers: handlers.slice(delegateCount)
                        });
                        return handlerQueue;
                    },
                    fix: function(event) {
                        if (event[jQuery.expando]) return event;
                        var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
                        if (!fixHook) this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
                        copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                        event = new jQuery.Event(originalEvent);
                        i = copy.length;
                        while (i--) {
                            prop = copy[i];
                            event[prop] = originalEvent[prop];
                        }
                        if (!event.target) event.target = originalEvent.srcElement || document;
                        if (event.target.nodeType === 3) event.target = event.target.parentNode;
                        event.metaKey = !!event.metaKey;
                        return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(event, original) {
                            if (event.which == null) event.which = original.charCode != null ? original.charCode : original.keyCode;
                            return event;
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(event, original) {
                            var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
                            if (event.pageX == null && original.clientX != null) {
                                eventDoc = event.target.ownerDocument || document;
                                doc = eventDoc.documentElement;
                                body = eventDoc.body;
                                event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                                event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                            }
                            if (!event.relatedTarget && fromElement) event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                            if (!event.which && button !== void 0) event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                            return event;
                        }
                    },
                    special: {
                        load: {
                            noBubble: true
                        },
                        focus: {
                            trigger: function() {
                                if (this !== safeActiveElement() && this.focus) try {
                                    this.focus();
                                    return false;
                                } catch (e) {}
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function() {
                                if (this === safeActiveElement() && this.blur) {
                                    this.blur();
                                    return false;
                                }
                            },
                            delegateType: "focusout"
                        },
                        click: {
                            trigger: function() {
                                if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                                    this.click();
                                    return false;
                                }
                            },
                            _default: function(event) {
                                return jQuery.nodeName(event.target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(event) {
                                if (event.result !== void 0 && event.originalEvent) event.originalEvent.returnValue = event.result;
                            }
                        }
                    },
                    simulate: function(type, elem, event, bubble) {
                        var e = jQuery.extend(new jQuery.Event, event, {
                            type,
                            isSimulated: true,
                            originalEvent: {}
                        });
                        if (bubble) jQuery.event.trigger(e, null, elem); else jQuery.event.dispatch.call(elem, e);
                        if (e.isDefaultPrevented()) event.preventDefault();
                    }
                };
                jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
                    if (elem.removeEventListener) elem.removeEventListener(type, handle, false);
                } : function(elem, type, handle) {
                    var name = "on" + type;
                    if (elem.detachEvent) {
                        if (typeof elem[name] === strundefined) elem[name] = null;
                        elem.detachEvent(name, handle);
                    }
                };
                jQuery.Event = function(src, props) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
                    } else this.type = src;
                    if (props) jQuery.extend(this, props);
                    this.timeStamp = src && src.timeStamp || jQuery.now();
                    this[jQuery.expando] = true;
                };
                jQuery.Event.prototype = {
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (!e) return;
                        if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (!e) return;
                        if (e.stopPropagation) e.stopPropagation();
                        e.cancelBubble = true;
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && e.stopImmediatePropagation) e.stopImmediatePropagation();
                        this.stopPropagation();
                    }
                };
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function(event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            if (!related || related !== target && !jQuery.contains(target, related)) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                });
                if (!support.submitBubbles) jQuery.event.special.submit = {
                    setup: function() {
                        if (jQuery.nodeName(this, "form")) return false;
                        jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                            var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : void 0;
                            if (form && !jQuery._data(form, "submitBubbles")) {
                                jQuery.event.add(form, "submit._submit", function(event) {
                                    event._submit_bubble = true;
                                });
                                jQuery._data(form, "submitBubbles", true);
                            }
                        });
                    },
                    postDispatch: function(event) {
                        if (event._submit_bubble) {
                            delete event._submit_bubble;
                            if (this.parentNode && !event.isTrigger) jQuery.event.simulate("submit", this.parentNode, event, true);
                        }
                    },
                    teardown: function() {
                        if (jQuery.nodeName(this, "form")) return false;
                        jQuery.event.remove(this, "._submit");
                    }
                };
                if (!support.changeBubbles) jQuery.event.special.change = {
                    setup: function() {
                        if (rformElems.test(this.nodeName)) {
                            if (this.type === "checkbox" || this.type === "radio") {
                                jQuery.event.add(this, "propertychange._change", function(event) {
                                    if (event.originalEvent.propertyName === "checked") this._just_changed = true;
                                });
                                jQuery.event.add(this, "click._change", function(event) {
                                    if (this._just_changed && !event.isTrigger) this._just_changed = false;
                                    jQuery.event.simulate("change", this, event, true);
                                });
                            }
                            return false;
                        }
                        jQuery.event.add(this, "beforeactivate._change", function(e) {
                            var elem = e.target;
                            if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                                jQuery.event.add(elem, "change._change", function(event) {
                                    if (this.parentNode && !event.isSimulated && !event.isTrigger) jQuery.event.simulate("change", this.parentNode, event, true);
                                });
                                jQuery._data(elem, "changeBubbles", true);
                            }
                        });
                    },
                    handle: function(event) {
                        var elem = event.target;
                        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") return event.handleObj.handler.apply(this, arguments);
                    },
                    teardown: function() {
                        jQuery.event.remove(this, "._change");
                        return !rformElems.test(this.nodeName);
                    }
                };
                if (!support.focusinBubbles) jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(orig, fix) {
                    var handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
                    };
                    jQuery.event.special[fix] = {
                        setup: function() {
                            var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix);
                            if (!attaches) doc.addEventListener(orig, handler, true);
                            jQuery._data(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix) - 1;
                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                jQuery._removeData(doc, fix);
                            } else jQuery._data(doc, fix, attaches);
                        }
                    };
                });
                jQuery.fn.extend({
                    on: function(types, selector, data, fn, one) {
                        var type, origFn;
                        if (typeof types === "object") {
                            if (typeof selector !== "string") {
                                data = data || selector;
                                selector = void 0;
                            }
                            for (type in types) this.on(type, selector, data, types[type], one);
                            return this;
                        }
                        if (data == null && fn == null) {
                            fn = selector;
                            data = selector = void 0;
                        } else if (fn == null) if (typeof selector === "string") {
                            fn = data;
                            data = void 0;
                        } else {
                            fn = data;
                            data = selector;
                            selector = void 0;
                        }
                        if (fn === false) fn = returnFalse; else if (!fn) return this;
                        if (one === 1) {
                            origFn = fn;
                            fn = function(event) {
                                jQuery().off(event);
                                return origFn.apply(this, arguments);
                            };
                            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                        }
                        return this.each(function() {
                            jQuery.event.add(this, types, fn, data, selector);
                        });
                    },
                    one: function(types, selector, data, fn) {
                        return this.on(types, selector, data, fn, 1);
                    },
                    off: function(types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if (typeof types === "object") {
                            for (type in types) this.off(type, selector, types[type]);
                            return this;
                        }
                        if (selector === false || typeof selector === "function") {
                            fn = selector;
                            selector = void 0;
                        }
                        if (fn === false) fn = returnFalse;
                        return this.each(function() {
                            jQuery.event.remove(this, types, fn, selector);
                        });
                    },
                    trigger: function(type, data) {
                        return this.each(function() {
                            jQuery.event.trigger(type, data, this);
                        });
                    },
                    triggerHandler: function(type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, true);
                    }
                });
                function createSafeFragment(document) {
                    var list = nodeNames.split("|"), safeFrag = document.createDocumentFragment();
                    if (safeFrag.createElement) while (list.length) safeFrag.createElement(list.pop());
                    return safeFrag;
                }
                var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
                    option: [ 1, "<select multiple='multiple'>", "</select>" ],
                    legend: [ 1, "<fieldset>", "</fieldset>" ],
                    area: [ 1, "<map>", "</map>" ],
                    param: [ 1, "<object>", "</object>" ],
                    thead: [ 1, "<table>", "</table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
                }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
                wrapMap.optgroup = wrapMap.option;
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                function getAll(context, tag) {
                    var elems, elem, i = 0, found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== strundefined ? context.querySelectorAll(tag || "*") : void 0;
                    if (!found) for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) if (!tag || jQuery.nodeName(elem, tag)) found.push(elem); else jQuery.merge(found, getAll(elem, tag));
                    return tag === void 0 || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], found) : found;
                }
                function fixDefaultChecked(elem) {
                    if (rcheckableType.test(elem.type)) elem.defaultChecked = elem.checked;
                }
                function manipulationTarget(elem, content) {
                    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
                }
                function disableScript(elem) {
                    elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    var match = rscriptTypeMasked.exec(elem.type);
                    if (match) elem.type = match[1]; else elem.removeAttribute("type");
                    return elem;
                }
                function setGlobalEval(elems, refElements) {
                    var elem, i = 0;
                    for (;(elem = elems[i]) != null; i++) jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
                }
                function cloneCopyEvent(src, dest) {
                    if (dest.nodeType !== 1 || !jQuery.hasData(src)) return;
                    var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
                    if (events) {
                        delete curData.handle;
                        curData.events = {};
                        for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                    }
                    if (curData.data) curData.data = jQuery.extend({}, curData.data);
                }
                function fixCloneNodeIssues(src, dest) {
                    var nodeName, e, data;
                    if (dest.nodeType !== 1) return;
                    nodeName = dest.nodeName.toLowerCase();
                    if (!support.noCloneEvent && dest[jQuery.expando]) {
                        data = jQuery._data(dest);
                        for (e in data.events) jQuery.removeEvent(dest, e, data.handle);
                        dest.removeAttribute(jQuery.expando);
                    }
                    if (nodeName === "script" && dest.text !== src.text) {
                        disableScript(dest).text = src.text;
                        restoreScript(dest);
                    } else if (nodeName === "object") {
                        if (dest.parentNode) dest.outerHTML = src.outerHTML;
                        if (support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) dest.innerHTML = src.innerHTML;
                    } else if (nodeName === "input" && rcheckableType.test(src.type)) {
                        dest.defaultChecked = dest.checked = src.checked;
                        if (dest.value !== src.value) dest.value = src.value;
                    } else if (nodeName === "option") dest.defaultSelected = dest.selected = src.defaultSelected; else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
                }
                jQuery.extend({
                    clone: function(elem, dataAndEvents, deepDataAndEvents) {
                        var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
                        if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) clone = elem.cloneNode(true); else {
                            fragmentDiv.innerHTML = elem.outerHTML;
                            fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
                        }
                        if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for (i = 0; (node = srcElements[i]) != null; ++i) if (destElements[i]) fixCloneNodeIssues(node, destElements[i]);
                        }
                        if (dataAndEvents) if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0; (node = srcElements[i]) != null; i++) cloneCopyEvent(node, destElements[i]);
                        } else cloneCopyEvent(elem, clone);
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        destElements = srcElements = node = null;
                        return clone;
                    },
                    buildFragment: function(elems, context, scripts, selection) {
                        var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
                        for (;i < l; i++) {
                            elem = elems[i];
                            if (elem || elem === 0) if (jQuery.type(elem) === "object") jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                                tmp = tmp || safe.appendChild(context.createElement("div"));
                                tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                                wrap = wrapMap[tag] || wrapMap._default;
                                tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                                j = wrap[0];
                                while (j--) tmp = tmp.lastChild;
                                if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                                if (!support.tbody) {
                                    elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                                    j = elem && elem.childNodes.length;
                                    while (j--) if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) elem.removeChild(tbody);
                                }
                                jQuery.merge(nodes, tmp.childNodes);
                                tmp.textContent = "";
                                while (tmp.firstChild) tmp.removeChild(tmp.firstChild);
                                tmp = safe.lastChild;
                            }
                        }
                        if (tmp) safe.removeChild(tmp);
                        if (!support.appendChecked) jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
                        i = 0;
                        while (elem = nodes[i++]) {
                            if (selection && jQuery.inArray(elem, selection) !== -1) continue;
                            contains = jQuery.contains(elem.ownerDocument, elem);
                            tmp = getAll(safe.appendChild(elem), "script");
                            if (contains) setGlobalEval(tmp);
                            if (scripts) {
                                j = 0;
                                while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
                            }
                        }
                        tmp = null;
                        return safe;
                    },
                    cleanData: function(elems, acceptData) {
                        var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = support.deleteExpando, special = jQuery.event.special;
                        for (;(elem = elems[i]) != null; i++) if (acceptData || jQuery.acceptData(elem)) {
                            id = elem[internalKey];
                            data = id && cache[id];
                            if (data) {
                                if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type); else jQuery.removeEvent(elem, type, data.handle);
                                if (cache[id]) {
                                    delete cache[id];
                                    if (deleteExpando) delete elem[internalKey]; else if (typeof elem.removeAttribute !== strundefined) elem.removeAttribute(internalKey); else elem[internalKey] = null;
                                    deletedIds.push(id);
                                }
                            }
                        }
                    }
                });
                jQuery.fn.extend({
                    text: function(value) {
                        return access(this, function(value) {
                            return value === void 0 ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
                        }, null, value, arguments.length);
                    },
                    append: function() {
                        return this.domManip(arguments, function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        });
                    },
                    prepend: function() {
                        return this.domManip(arguments, function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        });
                    },
                    before: function() {
                        return this.domManip(arguments, function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this);
                        });
                    },
                    after: function() {
                        return this.domManip(arguments, function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                        });
                    },
                    remove: function(selector, keepData) {
                        var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
                        for (;(elem = elems[i]) != null; i++) {
                            if (!keepData && elem.nodeType === 1) jQuery.cleanData(getAll(elem));
                            if (elem.parentNode) {
                                if (keepData && jQuery.contains(elem.ownerDocument, elem)) setGlobalEval(getAll(elem, "script"));
                                elem.parentNode.removeChild(elem);
                            }
                        }
                        return this;
                    },
                    empty: function() {
                        var elem, i = 0;
                        for (;(elem = this[i]) != null; i++) {
                            if (elem.nodeType === 1) jQuery.cleanData(getAll(elem, false));
                            while (elem.firstChild) elem.removeChild(elem.firstChild);
                            if (elem.options && jQuery.nodeName(elem, "select")) elem.options.length = 0;
                        }
                        return this;
                    },
                    clone: function(dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                        return this.map(function() {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        });
                    },
                    html: function(value) {
                        return access(this, function(value) {
                            var elem = this[0] || {}, i = 0, l = this.length;
                            if (value === void 0) return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
                            if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                                value = value.replace(rxhtmlTag, "<$1></$2>");
                                try {
                                    for (;i < l; i++) {
                                        elem = this[i] || {};
                                        if (elem.nodeType === 1) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                } catch (e) {}
                            }
                            if (elem) this.empty().append(value);
                        }, null, value, arguments.length);
                    },
                    replaceWith: function() {
                        var arg = arguments[0];
                        this.domManip(arguments, function(elem) {
                            arg = this.parentNode;
                            jQuery.cleanData(getAll(this));
                            if (arg) arg.replaceChild(elem, this);
                        });
                        return arg && (arg.length || arg.nodeType) ? this : this.remove();
                    },
                    detach: function(selector) {
                        return this.remove(selector, true);
                    },
                    domManip: function(args, callback) {
                        args = concat.apply([], args);
                        var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
                        if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return this.each(function(index) {
                            var self = set.eq(index);
                            if (isFunction) args[0] = value.call(this, index, self.html());
                            self.domManip(args, callback);
                        });
                        if (l) {
                            fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                            first = fragment.firstChild;
                            if (fragment.childNodes.length === 1) fragment = first;
                            if (first) {
                                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                                hasScripts = scripts.length;
                                for (;i < l; i++) {
                                    node = fragment;
                                    if (i !== iNoClone) {
                                        node = jQuery.clone(node, true, true);
                                        if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
                                    }
                                    callback.call(this[i], node, i);
                                }
                                if (hasScripts) {
                                    doc = scripts[scripts.length - 1].ownerDocument;
                                    jQuery.map(scripts, restoreScript);
                                    for (i = 0; i < hasScripts; i++) {
                                        node = scripts[i];
                                        if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) if (node.src) {
                                            if (jQuery._evalUrl) jQuery._evalUrl(node.src);
                                        } else jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                                    }
                                }
                                fragment = first = null;
                            }
                        }
                        return this;
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(name, original) {
                    jQuery.fn[name] = function(selector) {
                        var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
                        for (;i <= last; i++) {
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            push.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                });
                var iframe, elemdisplay = {};
                function actualDisplay(name, doc) {
                    var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
                    elem.detach();
                    return display;
                }
                function defaultDisplay(nodeName) {
                    var doc = document, display = elemdisplay[nodeName];
                    if (!display) {
                        display = actualDisplay(nodeName, doc);
                        if (display === "none" || !display) {
                            iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                            doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                            doc.write();
                            doc.close();
                            display = actualDisplay(nodeName, doc);
                            iframe.detach();
                        }
                        elemdisplay[nodeName] = display;
                    }
                    return display;
                }
                (function() {
                    var shrinkWrapBlocksVal;
                    support.shrinkWrapBlocks = function() {
                        if (shrinkWrapBlocksVal != null) return shrinkWrapBlocksVal;
                        shrinkWrapBlocksVal = false;
                        var div, body, container;
                        body = document.getElementsByTagName("body")[0];
                        if (!body || !body.style) return;
                        div = document.createElement("div");
                        container = document.createElement("div");
                        container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                        body.appendChild(container).appendChild(div);
                        if (typeof div.style.zoom !== strundefined) {
                            div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
                            div.appendChild(document.createElement("div")).style.width = "5px";
                            shrinkWrapBlocksVal = div.offsetWidth !== 3;
                        }
                        body.removeChild(container);
                        return shrinkWrapBlocksVal;
                    };
                })();
                var rmargin = /^margin/;
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
                if (window.getComputedStyle) {
                    getStyles = function(elem) {
                        if (elem.ownerDocument.defaultView.opener) return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
                        return window.getComputedStyle(elem, null);
                    };
                    curCSS = function(elem, name, computed) {
                        var width, minWidth, maxWidth, ret, style = elem.style;
                        computed = computed || getStyles(elem);
                        ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0;
                        if (computed) {
                            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) ret = jQuery.style(elem, name);
                            if (rnumnonpx.test(ret) && rmargin.test(name)) {
                                width = style.width;
                                minWidth = style.minWidth;
                                maxWidth = style.maxWidth;
                                style.minWidth = style.maxWidth = style.width = ret;
                                ret = computed.width;
                                style.width = width;
                                style.minWidth = minWidth;
                                style.maxWidth = maxWidth;
                            }
                        }
                        return ret === void 0 ? ret : ret + "";
                    };
                } else if (document.documentElement.currentStyle) {
                    getStyles = function(elem) {
                        return elem.currentStyle;
                    };
                    curCSS = function(elem, name, computed) {
                        var left, rs, rsLeft, ret, style = elem.style;
                        computed = computed || getStyles(elem);
                        ret = computed ? computed[name] : void 0;
                        if (ret == null && style && style[name]) ret = style[name];
                        if (rnumnonpx.test(ret) && !rposition.test(name)) {
                            left = style.left;
                            rs = elem.runtimeStyle;
                            rsLeft = rs && rs.left;
                            if (rsLeft) rs.left = elem.currentStyle.left;
                            style.left = name === "fontSize" ? "1em" : ret;
                            ret = style.pixelLeft + "px";
                            style.left = left;
                            if (rsLeft) rs.left = rsLeft;
                        }
                        return ret === void 0 ? ret : ret + "" || "auto";
                    };
                }
                function addGetHookIf(conditionFn, hookFn) {
                    return {
                        get: function() {
                            var condition = conditionFn();
                            if (condition == null) return;
                            if (condition) {
                                delete this.get;
                                return;
                            }
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                (function() {
                    var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
                    div = document.createElement("div");
                    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                    a = div.getElementsByTagName("a")[0];
                    style = a && a.style;
                    if (!style) return;
                    style.cssText = "float:left;opacity:.5";
                    support.opacity = style.opacity === "0.5";
                    support.cssFloat = !!style.cssFloat;
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support.clearCloneStyle = div.style.backgroundClip === "content-box";
                    support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";
                    jQuery.extend(support, {
                        reliableHiddenOffsets: function() {
                            if (reliableHiddenOffsetsVal == null) computeStyleTests();
                            return reliableHiddenOffsetsVal;
                        },
                        boxSizingReliable: function() {
                            if (boxSizingReliableVal == null) computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelPosition: function() {
                            if (pixelPositionVal == null) computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginRight: function() {
                            if (reliableMarginRightVal == null) computeStyleTests();
                            return reliableMarginRightVal;
                        }
                    });
                    function computeStyleTests() {
                        var div, body, container, contents;
                        body = document.getElementsByTagName("body")[0];
                        if (!body || !body.style) return;
                        div = document.createElement("div");
                        container = document.createElement("div");
                        container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                        body.appendChild(container).appendChild(div);
                        div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
                        pixelPositionVal = boxSizingReliableVal = false;
                        reliableMarginRightVal = true;
                        if (window.getComputedStyle) {
                            pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";
                            boxSizingReliableVal = (window.getComputedStyle(div, null) || {
                                width: "4px"
                            }).width === "4px";
                            contents = div.appendChild(document.createElement("div"));
                            contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                            contents.style.marginRight = contents.style.width = "0";
                            div.style.width = "1px";
                            reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);
                            div.removeChild(contents);
                        }
                        div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                        contents = div.getElementsByTagName("td");
                        contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                        reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
                        if (reliableHiddenOffsetsVal) {
                            contents[0].style.display = "";
                            contents[1].style.display = "none";
                            reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
                        }
                        body.removeChild(container);
                    }
                })();
                jQuery.swap = function(elem, options, callback, args) {
                    var ret, name, old = {};
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.apply(elem, args || []);
                    for (name in options) elem.style[name] = old[name];
                    return ret;
                };
                var ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                }, cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
                function vendorPropName(style, name) {
                    if (name in style) return name;
                    var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
                    while (i--) {
                        name = cssPrefixes[i] + capName;
                        if (name in style) return name;
                    }
                    return origName;
                }
                function showHide(elements, show) {
                    var display, elem, hidden, values = [], index = 0, length = elements.length;
                    for (;index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) continue;
                        values[index] = jQuery._data(elem, "olddisplay");
                        display = elem.style.display;
                        if (show) {
                            if (!values[index] && display === "none") elem.style.display = "";
                            if (elem.style.display === "" && isHidden(elem)) values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
                        } else {
                            hidden = isHidden(elem);
                            if (display && display !== "none" || !hidden) jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                        }
                    }
                    for (index = 0; index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) continue;
                        if (!show || elem.style.display === "none" || elem.style.display === "") elem.style.display = show ? values[index] || "" : "none";
                    }
                    return elements;
                }
                function setPositiveNumber(elem, value, subtract) {
                    var matches = rnumsplit.exec(value);
                    return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
                }
                function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
                    var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
                    for (;i < 4; i += 2) {
                        if (extra === "margin") val += jQuery.css(elem, extra + cssExpand[i], true, styles);
                        if (isBorderBox) {
                            if (extra === "content") val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if (extra !== "margin") val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        } else {
                            val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if (extra !== "padding") val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                    return val;
                }
                function getWidthOrHeight(elem, name, extra) {
                    var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                    if (val <= 0 || val == null) {
                        val = curCSS(elem, name, styles);
                        if (val < 0 || val == null) val = elem.style[name];
                        if (rnumnonpx.test(val)) return val;
                        valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
                        val = parseFloat(val) || 0;
                    }
                    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
                }
                jQuery.extend({
                    cssHooks: {
                        opacity: {
                            get: function(elem, computed) {
                                if (computed) {
                                    var ret = curCSS(elem, "opacity");
                                    return ret === "" ? "1" : ret;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        columnCount: true,
                        fillOpacity: true,
                        flexGrow: true,
                        flexShrink: true,
                        fontWeight: true,
                        lineHeight: true,
                        opacity: true,
                        order: true,
                        orphans: true,
                        widows: true,
                        zIndex: true,
                        zoom: true
                    },
                    cssProps: {
                        float: support.cssFloat ? "cssFloat" : "styleFloat"
                    },
                    style: function(elem, name, value, extra) {
                        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
                        var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
                        name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (value !== void 0) {
                            type = typeof value;
                            if (type === "string" && (ret = rrelNum.exec(value))) {
                                value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                                type = "number";
                            }
                            if (value == null || value !== value) return;
                            if (type === "number" && !jQuery.cssNumber[origName]) value += "px";
                            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) try {
                                style[name] = value;
                            } catch (e) {}
                        } else {
                            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) return ret;
                            return style[name];
                        }
                    },
                    css: function(elem, name, extra, styles) {
                        var num, val, hooks, origName = jQuery.camelCase(name);
                        name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                        if (val === void 0) val = curCSS(elem, name, styles);
                        if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
                        if (extra === "" || extra) {
                            num = parseFloat(val);
                            return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each([ "height", "width" ], function(i, name) {
                    jQuery.cssHooks[name] = {
                        get: function(elem, computed, extra) {
                            if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function() {
                                return getWidthOrHeight(elem, name, extra);
                            }) : getWidthOrHeight(elem, name, extra);
                        },
                        set: function(elem, value, extra) {
                            var styles = extra && getStyles(elem);
                            return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
                        }
                    };
                });
                if (!support.opacity) jQuery.cssHooks.opacity = {
                    get: function(elem, computed) {
                        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
                    },
                    set: function(elem, value) {
                        var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
                        style.zoom = 1;
                        if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                            style.removeAttribute("filter");
                            if (value === "" || currentStyle && !currentStyle.filter) return;
                        }
                        style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
                    }
                };
                jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
                    if (computed) return jQuery.swap(elem, {
                        display: "inline-block"
                    }, curCSS, [ elem, "marginRight" ]);
                });
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function(value) {
                            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                            for (;i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        }
                    };
                    if (!rmargin.test(prefix)) jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                });
                jQuery.fn.extend({
                    css: function(name, value) {
                        return access(this, function(elem, name, value) {
                            var styles, len, map = {}, i = 0;
                            if (jQuery.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for (;i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                return map;
                            }
                            return value !== void 0 ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                        }, name, value, arguments.length > 1);
                    },
                    show: function() {
                        return showHide(this, true);
                    },
                    hide: function() {
                        return showHide(this);
                    },
                    toggle: function(state) {
                        if (typeof state === "boolean") return state ? this.show() : this.hide();
                        return this.each(function() {
                            if (isHidden(this)) jQuery(this).show(); else jQuery(this).hide();
                        });
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function(elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || "swing";
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function() {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function(percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); else this.pos = eased = percent;
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) this.options.step.call(this.elem, this.now, this);
                        if (hooks && hooks.set) hooks.set(this); else Tween.propHooks._default.set(this);
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function(tween) {
                            var result;
                            if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) return tween.elem[tween.prop];
                            result = jQuery.css(tween.elem, tween.prop, "");
                            return !result || result === "auto" ? 0 : result;
                        },
                        set: function(tween) {
                            if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween); else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); else tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                    }
                };
                jQuery.easing = {
                    linear: function(p) {
                        return p;
                    },
                    swing: function(p) {
                        return .5 - Math.cos(p * Math.PI) / 2;
                    }
                };
                jQuery.fx = Tween.prototype.init;
                jQuery.fx.step = {};
                var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
                    "*": [ function(prop, value) {
                        var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
                        if (start && start[3] !== unit) {
                            unit = unit || start[3];
                            parts = parts || [];
                            start = +target || 1;
                            do {
                                scale = scale || ".5";
                                start /= scale;
                                jQuery.style(tween.elem, prop, start + unit);
                            } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
                        }
                        if (parts) {
                            start = tween.start = +start || +target || 0;
                            tween.unit = unit;
                            tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
                        }
                        return tween;
                    } ]
                };
                function createFxNow() {
                    setTimeout(function() {
                        fxNow = void 0;
                    });
                    return fxNow = jQuery.now();
                }
                function genFx(type, includeWidth) {
                    var which, attrs = {
                        height: type
                    }, i = 0;
                    includeWidth = includeWidth ? 1 : 0;
                    for (;i < 4; i += 2 - includeWidth) {
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) attrs.opacity = attrs.width = type;
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
                    for (;index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, "fxshow");
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (hooks.unqueued == null) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function() {
                                if (!hooks.unqueued) oldfire();
                            };
                        }
                        hooks.unqueued++;
                        anim.always(function() {
                            anim.always(function() {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                            });
                        });
                    }
                    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
                        opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                        display = jQuery.css(elem, "display");
                        checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
                        if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") style.display = "inline-block"; else style.zoom = 1;
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        if (!support.shrinkWrapBlocks()) anim.always(function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        });
                    }
                    for (prop in props) {
                        value = props[prop];
                        if (rfxtypes.exec(value)) {
                            delete props[prop];
                            toggle = toggle || value === "toggle";
                            if (value === (hidden ? "hide" : "show")) if (value === "show" && dataShow && dataShow[prop] !== void 0) hidden = true; else continue;
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        } else display = void 0;
                    }
                    if (!jQuery.isEmptyObject(orig)) {
                        if (dataShow) {
                            if ("hidden" in dataShow) hidden = dataShow.hidden;
                        } else dataShow = jQuery._data(elem, "fxshow", {});
                        if (toggle) dataShow.hidden = !hidden;
                        if (hidden) jQuery(elem).show(); else anim.done(function() {
                            jQuery(elem).hide();
                        });
                        anim.done(function() {
                            var prop;
                            jQuery._removeData(elem, "fxshow");
                            for (prop in orig) jQuery.style(elem, prop, orig[prop]);
                        });
                        for (prop in orig) {
                            tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                            if (!(prop in dataShow)) {
                                dataShow[prop] = tween.start;
                                if (hidden) {
                                    tween.end = tween.start;
                                    tween.start = prop === "width" || prop === "height" ? 1 : 0;
                                }
                            }
                        }
                    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") style.display = display;
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    for (index in props) {
                        name = jQuery.camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (jQuery.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            for (index in value) if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        } else specialEasing[name] = easing;
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
                        delete tick.elem;
                    }), tick = function() {
                        if (stopped) return false;
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for (;index < length; index++) animation.tweens[index].run(percent);
                        deferred.notifyWith(elem, [ animation, percent, remaining ]);
                        if (percent < 1 && length) return remaining; else {
                            deferred.resolveWith(elem, [ animation ]);
                            return false;
                        }
                    }, animation = deferred.promise({
                        elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {}
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            stopped = true;
                            for (;index < length; index++) animation.tweens[index].run(1);
                            if (gotoEnd) deferred.resolveWith(elem, [ animation, gotoEnd ]); else deferred.rejectWith(elem, [ animation, gotoEnd ]);
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for (;index < length; index++) {
                        result = animationPrefilters[index].call(animation, elem, props, animation.opts);
                        if (result) return result;
                    }
                    jQuery.map(props, createTween, animation);
                    if (jQuery.isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweener: function(props, callback) {
                        if (jQuery.isFunction(props)) {
                            callback = props;
                            props = [ "*" ];
                        } else props = props.split(" ");
                        var prop, index = 0, length = props.length;
                        for (;index < length; index++) {
                            prop = props[index];
                            tweeners[prop] = tweeners[prop] || [];
                            tweeners[prop].unshift(callback);
                        }
                    },
                    prefilter: function(callback, prepend) {
                        if (prepend) animationPrefilters.unshift(callback); else animationPrefilters.push(callback);
                    }
                });
                jQuery.speed = function(speed, easing, fn) {
                    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                        complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
                    };
                    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
                    if (opt.queue == null || opt.queue === true) opt.queue = "fx";
                    opt.old = opt.complete;
                    opt.complete = function() {
                        if (jQuery.isFunction(opt.old)) opt.old.call(this);
                        if (opt.queue) jQuery.dequeue(this, opt.queue);
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function(speed, to, easing, callback) {
                        return this.filter(isHidden).css("opacity", 0).show().end().animate({
                            opacity: to
                        }, speed, easing, callback);
                    },
                    animate: function(prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            if (empty || jQuery._data(this, "finish")) anim.stop(true);
                        };
                        doAnimation.finish = doAnimation;
                        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function(type, clearQueue, gotoEnd) {
                        var stopQueue = function(hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if (typeof type !== "string") {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = void 0;
                        }
                        if (clearQueue && type !== false) this.queue(type || "fx", []);
                        return this.each(function() {
                            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
                            if (index) {
                                if (data[index] && data[index].stop) stopQueue(data[index]);
                            } else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                            if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                        });
                    },
                    finish: function(type) {
                        if (type !== false) type = type || "fx";
                        return this.each(function() {
                            var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            data.finish = true;
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) hooks.stop.call(this, true);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                            for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                            delete data.finish;
                        });
                    }
                });
                jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                    };
                });
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(name, props) {
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                });
                jQuery.timers = [];
                jQuery.fx.tick = function() {
                    var timer, timers = jQuery.timers, i = 0;
                    fxNow = jQuery.now();
                    for (;i < timers.length; i++) {
                        timer = timers[i];
                        if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                    }
                    if (!timers.length) jQuery.fx.stop();
                    fxNow = void 0;
                };
                jQuery.fx.timer = function(timer) {
                    jQuery.timers.push(timer);
                    if (timer()) jQuery.fx.start(); else jQuery.timers.pop();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function() {
                    if (!timerId) timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
                };
                jQuery.fx.stop = function() {
                    clearInterval(timerId);
                    timerId = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                };
                jQuery.fn.delay = function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, function(next, hooks) {
                        var timeout = setTimeout(next, time);
                        hooks.stop = function() {
                            clearTimeout(timeout);
                        };
                    });
                };
                (function() {
                    var input, div, select, a, opt;
                    div = document.createElement("div");
                    div.setAttribute("className", "t");
                    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                    a = div.getElementsByTagName("a")[0];
                    select = document.createElement("select");
                    opt = select.appendChild(document.createElement("option"));
                    input = div.getElementsByTagName("input")[0];
                    a.style.cssText = "top:1px";
                    support.getSetAttribute = div.className !== "t";
                    support.style = /top/.test(a.getAttribute("style"));
                    support.hrefNormalized = a.getAttribute("href") === "/a";
                    support.checkOn = !!input.value;
                    support.optSelected = opt.selected;
                    support.enctype = !!document.createElement("form").enctype;
                    select.disabled = true;
                    support.optDisabled = !opt.disabled;
                    input = document.createElement("input");
                    input.setAttribute("value", "");
                    support.input = input.getAttribute("value") === "";
                    input.value = "t";
                    input.setAttribute("type", "radio");
                    support.radioValue = input.value === "t";
                })();
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function(value) {
                        var hooks, ret, isFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) return ret;
                                ret = elem.value;
                                return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                            }
                            return;
                        }
                        isFunction = jQuery.isFunction(value);
                        return this.each(function(i) {
                            var val;
                            if (this.nodeType !== 1) return;
                            if (isFunction) val = value.call(this, i, jQuery(this).val()); else val = value;
                            if (val == null) val = ""; else if (typeof val === "number") val += ""; else if (jQuery.isArray(val)) val = jQuery.map(val, function(value) {
                                return value == null ? "" : value + "";
                            });
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) this.value = val;
                        });
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return val != null ? val : jQuery.trim(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function(elem) {
                                var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                                for (;i < max; i++) {
                                    option = options[i];
                                    if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                        value = jQuery(option).val();
                                        if (one) return value;
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function(elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while (i--) {
                                    option = options[i];
                                    if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) try {
                                        option.selected = optionSet = true;
                                    } catch (_) {
                                        option.scrollHeight;
                                    } else option.selected = false;
                                }
                                if (!optionSet) elem.selectedIndex = -1;
                                return options;
                            }
                        }
                    }
                });
                jQuery.each([ "radio", "checkbox" ], function() {
                    jQuery.valHooks[this] = {
                        set: function(elem, value) {
                            if (jQuery.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                        }
                    };
                    if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    };
                });
                var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = support.getSetAttribute, getSetInput = support.input;
                jQuery.fn.extend({
                    attr: function(name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function(name) {
                        return this.each(function() {
                            jQuery.removeAttr(this, name);
                        });
                    }
                });
                jQuery.extend({
                    attr: function(elem, name, value) {
                        var hooks, ret, nType = elem.nodeType;
                        if (!elem || nType === 3 || nType === 8 || nType === 2) return;
                        if (typeof elem.getAttribute === strundefined) return jQuery.prop(elem, name, value);
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                            name = name.toLowerCase();
                            hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
                        }
                        if (value !== void 0) if (value === null) jQuery.removeAttr(elem, name); else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret; else {
                            elem.setAttribute(name, value + "");
                            return value;
                        } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret; else {
                            ret = jQuery.find.attr(elem, name);
                            return ret == null ? void 0 : ret;
                        }
                    },
                    removeAttr: function(elem, value) {
                        var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
                        if (attrNames && elem.nodeType === 1) while (name = attrNames[i++]) {
                            propName = jQuery.propFix[name] || name;
                            if (jQuery.expr.match.bool.test(name)) if (getSetInput && getSetAttribute || !ruseDefault.test(name)) elem[propName] = false; else elem[jQuery.camelCase("default-" + name)] = elem[propName] = false; else jQuery.attr(elem, name, "");
                            elem.removeAttribute(getSetAttribute ? name : propName);
                        }
                    },
                    attrHooks: {
                        type: {
                            set: function(elem, value) {
                                if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) elem.value = val;
                                    return value;
                                }
                            }
                        }
                    }
                });
                boolHook = {
                    set: function(elem, value, name) {
                        if (value === false) jQuery.removeAttr(elem, name); else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name); else elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
                        var ret, handle;
                        if (!isXML) {
                            handle = attrHandle[name];
                            attrHandle[name] = ret;
                            ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                            attrHandle[name] = handle;
                        }
                        return ret;
                    } : function(elem, name, isXML) {
                        if (!isXML) return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
                    };
                });
                if (!getSetInput || !getSetAttribute) jQuery.attrHooks.value = {
                    set: function(elem, value, name) {
                        if (jQuery.nodeName(elem, "input")) elem.defaultValue = value; else return nodeHook && nodeHook.set(elem, value, name);
                    }
                };
                if (!getSetAttribute) {
                    nodeHook = {
                        set: function(elem, value, name) {
                            var ret = elem.getAttributeNode(name);
                            if (!ret) elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
                            ret.value = value += "";
                            if (name === "value" || value === elem.getAttribute(name)) return value;
                        }
                    };
                    attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
                        var ret;
                        if (!isXML) return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
                    };
                    jQuery.valHooks.button = {
                        get: function(elem, name) {
                            var ret = elem.getAttributeNode(name);
                            if (ret && ret.specified) return ret.value;
                        },
                        set: nodeHook.set
                    };
                    jQuery.attrHooks.contenteditable = {
                        set: function(elem, value, name) {
                            nodeHook.set(elem, value === "" ? false : value, name);
                        }
                    };
                    jQuery.each([ "width", "height" ], function(i, name) {
                        jQuery.attrHooks[name] = {
                            set: function(elem, value) {
                                if (value === "") {
                                    elem.setAttribute(name, "auto");
                                    return value;
                                }
                            }
                        };
                    });
                }
                if (!support.style) jQuery.attrHooks.style = {
                    get: function(elem) {
                        return elem.style.cssText || void 0;
                    },
                    set: function(elem, value) {
                        return elem.style.cssText = value + "";
                    }
                };
                var rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function(name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function(name) {
                        name = jQuery.propFix[name] || name;
                        return this.each(function() {
                            try {
                                this[name] = void 0;
                                delete this[name];
                            } catch (e) {}
                        });
                    }
                });
                jQuery.extend({
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    },
                    prop: function(elem, name, value) {
                        var ret, hooks, notxml, nType = elem.nodeType;
                        if (!elem || nType === 3 || nType === 8 || nType === 2) return;
                        notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
                        if (notxml) {
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (value !== void 0) return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0 ? ret : elem[name] = value; else return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(elem) {
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                            }
                        }
                    }
                });
                if (!support.hrefNormalized) jQuery.each([ "href", "src" ], function(i, name) {
                    jQuery.propHooks[name] = {
                        get: function(elem) {
                            return elem.getAttribute(name, 4);
                        }
                    };
                });
                if (!support.optSelected) jQuery.propHooks.selected = {
                    get: function(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) parent.parentNode.selectedIndex;
                        }
                        return null;
                    }
                };
                jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
                    jQuery.propFix[this.toLowerCase()] = this;
                });
                if (!support.enctype) jQuery.propFix.enctype = "encoding";
                var rclass = /[\t\r\n\f]/g;
                jQuery.fn.extend({
                    addClass: function(value) {
                        var classes, elem, cur, clazz, j, finalValue, i = 0, len = this.length, proceed = typeof value === "string" && value;
                        if (jQuery.isFunction(value)) return this.each(function(j) {
                            jQuery(this).addClass(value.call(this, j, this.className));
                        });
                        if (proceed) {
                            classes = (value || "").match(rnotwhite) || [];
                            for (;i < len; i++) {
                                elem = this[i];
                                cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                                if (cur) {
                                    j = 0;
                                    while (clazz = classes[j++]) if (cur.indexOf(" " + clazz + " ") < 0) cur += clazz + " ";
                                    finalValue = jQuery.trim(cur);
                                    if (elem.className !== finalValue) elem.className = finalValue;
                                }
                            }
                        }
                        return this;
                    },
                    removeClass: function(value) {
                        var classes, elem, cur, clazz, j, finalValue, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === "string" && value;
                        if (jQuery.isFunction(value)) return this.each(function(j) {
                            jQuery(this).removeClass(value.call(this, j, this.className));
                        });
                        if (proceed) {
                            classes = (value || "").match(rnotwhite) || [];
                            for (;i < len; i++) {
                                elem = this[i];
                                cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                                if (cur) {
                                    j = 0;
                                    while (clazz = classes[j++]) while (cur.indexOf(" " + clazz + " ") >= 0) cur = cur.replace(" " + clazz + " ", " ");
                                    finalValue = value ? jQuery.trim(cur) : "";
                                    if (elem.className !== finalValue) elem.className = finalValue;
                                }
                            }
                        }
                        return this;
                    },
                    toggleClass: function(value, stateVal) {
                        var type = typeof value;
                        if (typeof stateVal === "boolean" && type === "string") return stateVal ? this.addClass(value) : this.removeClass(value);
                        if (jQuery.isFunction(value)) return this.each(function(i) {
                            jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                        });
                        return this.each(function() {
                            if (type === "string") {
                                var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || [];
                                while (className = classNames[i++]) if (self.hasClass(className)) self.removeClass(className); else self.addClass(className);
                            } else if (type === strundefined || type === "boolean") {
                                if (this.className) jQuery._data(this, "__className__", this.className);
                                this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                            }
                        });
                    },
                    hasClass: function(selector) {
                        var className = " " + selector + " ", i = 0, l = this.length;
                        for (;i < l; i++) if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return true;
                        return false;
                    }
                });
                jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                });
                jQuery.fn.extend({
                    hover: function(fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    },
                    bind: function(types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function(types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function(selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function(selector, types, fn) {
                        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    }
                });
                var nonce = jQuery.now();
                var rquery = /\?/;
                var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                jQuery.parseJSON = function(data) {
                    if (window.JSON && window.JSON.parse) return window.JSON.parse(data + "");
                    var requireNonComma, depth = null, str = jQuery.trim(data + "");
                    return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
                        if (requireNonComma && comma) depth = 0;
                        if (depth === 0) return token;
                        requireNonComma = open || comma;
                        depth += !close - !open;
                        return "";
                    })) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
                };
                jQuery.parseXML = function(data) {
                    var xml, tmp;
                    if (!data || typeof data !== "string") return null;
                    try {
                        if (window.DOMParser) {
                            tmp = new DOMParser;
                            xml = tmp.parseFromString(data, "text/xml");
                        } else {
                            xml = new ActiveXObject("Microsoft.XMLDOM");
                            xml.async = "false";
                            xml.loadXML(data);
                        }
                    } catch (e) {
                        xml = void 0;
                    }
                    if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) jQuery.error("Invalid XML: " + data);
                    return xml;
                };
                var ajaxLocParts, ajaxLocation, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
                try {
                    ajaxLocation = location.href;
                } catch (e) {
                    ajaxLocation = document.createElement("a");
                    ajaxLocation.href = "";
                    ajaxLocation = ajaxLocation.href;
                }
                ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
                function addToPrefiltersOrTransports(structure) {
                    return function(dataTypeExpression, func) {
                        if (typeof dataTypeExpression !== "string") {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                        if (jQuery.isFunction(func)) while (dataType = dataTypes[i++]) if (dataType.charAt(0) === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else (structure[dataType] = structure[dataType] || []).push(func);
                    };
                }
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {}, seekingTransport = structure === transports;
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                        });
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                function ajaxExtend(target, src) {
                    var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                    for (key in src) if (src[key] !== void 0) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                    if (deep) jQuery.extend(true, target, deep);
                    return target;
                }
                function ajaxHandleResponses(s, jqXHR, responses) {
                    var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
                    while (dataTypes[0] === "*") {
                        dataTypes.shift();
                        if (ct === void 0) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                    if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) firstDataType = type;
                        }
                        finalDataType = finalDataType || firstDataType;
                    }
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                        return responses[finalDataType];
                    }
                }
                function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    while (current) {
                        if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                        if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                        prev = current;
                        current = dataTypes.shift();
                        if (current) if (current === "*") current = prev; else if (prev !== "*" && prev !== current) {
                            conv = converters[prev + " " + current] || converters["* " + current];
                            if (!conv) for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) conv = converters[conv2]; else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (conv !== true) if (conv && s["throws"]) response = conv(response); else try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }
                jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: ajaxLocation,
                        type: "GET",
                        isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /xml/,
                            html: /html/,
                            json: /json/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": true,
                            "text json": jQuery.parseJSON,
                            "text xml": jQuery.parseXML
                        },
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    ajaxSetup: function(target, settings) {
                        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    ajax: function(url, options) {
                        if (typeof url === "object") {
                            options = url;
                            url = void 0;
                        }
                        options = options || {};
                        var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                            readyState: 0,
                            getResponseHeader: function(key) {
                                var match;
                                if (state === 2) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase()] = match[2];
                                    }
                                    match = responseHeaders[key.toLowerCase()];
                                }
                                return match == null ? null : match;
                            },
                            getAllResponseHeaders: function() {
                                return state === 2 ? responseHeadersString : null;
                            },
                            setRequestHeader: function(name, value) {
                                var lname = name.toLowerCase();
                                if (!state) {
                                    name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            overrideMimeType: function(type) {
                                if (!state) s.mimeType = type;
                                return this;
                            },
                            statusCode: function(map) {
                                var code;
                                if (map) if (state < 2) for (code in map) statusCode[code] = [ statusCode[code], map[code] ]; else jqXHR.always(map[jqXHR.status]);
                                return this;
                            },
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) transport.abort(finalText);
                                done(0, finalText);
                                return this;
                            }
                        };
                        deferred.promise(jqXHR).complete = completeDeferred.add;
                        jqXHR.success = jqXHR.done;
                        jqXHR.error = jqXHR.fail;
                        s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
                        s.type = options.method || options.type || s.method || s.type;
                        s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [ "" ];
                        if (s.crossDomain == null) {
                            parts = rurl.exec(s.url.toLowerCase());
                            s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
                        }
                        if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        if (state === 2) return jqXHR;
                        fireGlobals = jQuery.event && s.global;
                        if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
                        s.type = s.type.toUpperCase();
                        s.hasContent = !rnoContent.test(s.type);
                        cacheURL = s.url;
                        if (!s.hasContent) {
                            if (s.data) {
                                cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                delete s.data;
                            }
                            if (s.cache === false) s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                        }
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                        if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                        for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) return jqXHR.abort();
                        strAbort = "abort";
                        for (i in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) jqXHR[i](s[i]);
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        if (!transport) done(-1, "No Transport"); else {
                            jqXHR.readyState = 1;
                            if (fireGlobals) globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                            if (s.async && s.timeout > 0) timeoutTimer = setTimeout(function() {
                                jqXHR.abort("timeout");
                            }, s.timeout);
                            try {
                                state = 1;
                                transport.send(requestHeaders, done);
                            } catch (e) {
                                if (state < 2) done(-1, e); else throw e;
                            }
                        }
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            if (state === 2) return;
                            state = 2;
                            if (timeoutTimer) clearTimeout(timeoutTimer);
                            transport = void 0;
                            responseHeadersString = headers || "";
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            isSuccess = status >= 200 && status < 300 || status === 304;
                            if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            if (isSuccess) {
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) jQuery.lastModified[cacheURL] = modified;
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) jQuery.etag[cacheURL] = modified;
                                }
                                if (status === 204 || s.type === "HEAD") statusText = "nocontent"; else if (status === 304) statusText = "notmodified"; else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            } else {
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) status = 0;
                                }
                            }
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            if (isSuccess) deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]); else deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                            jqXHR.statusCode(statusCode);
                            statusCode = void 0;
                            if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                            completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                                if (! --jQuery.active) jQuery.event.trigger("ajaxStop");
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function(url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function(url, callback) {
                        return jQuery.get(url, void 0, callback, "script");
                    }
                });
                jQuery.each([ "get", "post" ], function(i, method) {
                    jQuery[method] = function(url, data, callback, type) {
                        if (jQuery.isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = void 0;
                        }
                        return jQuery.ajax({
                            url,
                            type: method,
                            dataType: type,
                            data,
                            success: callback
                        });
                    };
                });
                jQuery._evalUrl = function(url) {
                    return jQuery.ajax({
                        url,
                        type: "GET",
                        dataType: "script",
                        async: false,
                        global: false,
                        throws: true
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function(html) {
                        if (jQuery.isFunction(html)) return this.each(function(i) {
                            jQuery(this).wrapAll(html.call(this, i));
                        });
                        if (this[0]) {
                            var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) wrap.insertBefore(this[0]);
                            wrap.map(function() {
                                var elem = this;
                                while (elem.firstChild && elem.firstChild.nodeType === 1) elem = elem.firstChild;
                                return elem;
                            }).append(this);
                        }
                        return this;
                    },
                    wrapInner: function(html) {
                        if (jQuery.isFunction(html)) return this.each(function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        });
                        return this.each(function() {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) contents.wrapAll(html); else self.append(html);
                        });
                    },
                    wrap: function(html) {
                        var isFunction = jQuery.isFunction(html);
                        return this.each(function(i) {
                            jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
                        });
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            if (!jQuery.nodeName(this, "body")) jQuery(this).replaceWith(this.childNodes);
                        }).end();
                    }
                });
                jQuery.expr.filters.hidden = function(elem) {
                    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
                };
                jQuery.expr.filters.visible = function(elem) {
                    return !jQuery.expr.filters.hidden(elem);
                };
                var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) {
                        if (traditional || rbracket.test(prefix)) add(prefix, v); else buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                    }); else if (!traditional && jQuery.type(obj) === "object") for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
                }
                jQuery.param = function(a, traditional) {
                    var prefix, s = [], add = function(key, value) {
                        value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
                    };
                    if (traditional === void 0) traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
                    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
                        add(this.name, this.value);
                    }); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                    return s.join("&").replace(r20, "+");
                };
                jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        }).filter(function() {
                            var type = this.type;
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                        }).map(function(i, elem) {
                            var val = jQuery(this).val();
                            return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                                return {
                                    name: elem.name,
                                    value: val.replace(rCRLF, "\r\n")
                                };
                            }) : {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        }).get();
                    }
                });
                jQuery.ajaxSettings.xhr = window.ActiveXObject !== void 0 ? function() {
                    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
                } : createStandardXHR;
                var xhrId = 0, xhrCallbacks = {}, xhrSupported = jQuery.ajaxSettings.xhr();
                if (window.attachEvent) window.attachEvent("onunload", function() {
                    for (var key in xhrCallbacks) xhrCallbacks[key](void 0, true);
                });
                support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
                xhrSupported = support.ajax = !!xhrSupported;
                if (xhrSupported) jQuery.ajaxTransport(function(options) {
                    if (!options.crossDomain || support.cors) {
                        var callback;
                        return {
                            send: function(headers, complete) {
                                var i, xhr = options.xhr(), id = ++xhrId;
                                xhr.open(options.type, options.url, options.async, options.username, options.password);
                                if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                                for (i in headers) if (headers[i] !== void 0) xhr.setRequestHeader(i, headers[i] + "");
                                xhr.send(options.hasContent && options.data || null);
                                callback = function(_, isAbort) {
                                    var status, statusText, responses;
                                    if (callback && (isAbort || xhr.readyState === 4)) {
                                        delete xhrCallbacks[id];
                                        callback = void 0;
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (isAbort) {
                                            if (xhr.readyState !== 4) xhr.abort();
                                        } else {
                                            responses = {};
                                            status = xhr.status;
                                            if (typeof xhr.responseText === "string") responses.text = xhr.responseText;
                                            try {
                                                statusText = xhr.statusText;
                                            } catch (e) {
                                                statusText = "";
                                            }
                                            if (!status && options.isLocal && !options.crossDomain) status = responses.text ? 200 : 404; else if (status === 1223) status = 204;
                                        }
                                    }
                                    if (responses) complete(status, statusText, responses, xhr.getAllResponseHeaders());
                                };
                                if (!options.async) callback(); else if (xhr.readyState === 4) setTimeout(callback); else xhr.onreadystatechange = xhrCallbacks[id] = callback;
                            },
                            abort: function() {
                                if (callback) callback(void 0, true);
                            }
                        };
                    }
                });
                function createStandardXHR() {
                    try {
                        return new window.XMLHttpRequest;
                    } catch (e) {}
                }
                function createActiveXHR() {
                    try {
                        return new window.ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {}
                }
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /(?:java|ecma)script/
                    },
                    converters: {
                        "text script": function(text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                jQuery.ajaxPrefilter("script", function(s) {
                    if (s.cache === void 0) s.cache = false;
                    if (s.crossDomain) {
                        s.type = "GET";
                        s.global = false;
                    }
                });
                jQuery.ajaxTransport("script", function(s) {
                    if (s.crossDomain) {
                        var script, head = document.head || jQuery("head")[0] || document.documentElement;
                        return {
                            send: function(_, callback) {
                                script = document.createElement("script");
                                script.async = true;
                                if (s.scriptCharset) script.charset = s.scriptCharset;
                                script.src = s.url;
                                script.onload = script.onreadystatechange = function(_, isAbort) {
                                    if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                                        script.onload = script.onreadystatechange = null;
                                        if (script.parentNode) script.parentNode.removeChild(script);
                                        script = null;
                                        if (!isAbort) callback(200, "success");
                                    }
                                };
                                head.insertBefore(script, head.firstChild);
                            },
                            abort: function() {
                                if (script) script.onload(void 0, true);
                            }
                        };
                    }
                });
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                        this[callback] = true;
                        return callback;
                    }
                });
                jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                    if (jsonProp || s.dataTypes[0] === "jsonp") {
                        callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                        if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        s.converters["script json"] = function() {
                            if (!responseContainer) jQuery.error(callbackName + " was not called");
                            return responseContainer[0];
                        };
                        s.dataTypes[0] = "json";
                        overwritten = window[callbackName];
                        window[callbackName] = function() {
                            responseContainer = arguments;
                        };
                        jqXHR.always(function() {
                            window[callbackName] = overwritten;
                            if (s[callbackName]) {
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                oldCallbacks.push(callbackName);
                            }
                            if (responseContainer && jQuery.isFunction(overwritten)) overwritten(responseContainer[0]);
                            responseContainer = overwritten = void 0;
                        });
                        return "script";
                    }
                });
                jQuery.parseHTML = function(data, context, keepScripts) {
                    if (!data || typeof data !== "string") return null;
                    if (typeof context === "boolean") {
                        keepScripts = context;
                        context = false;
                    }
                    context = context || document;
                    var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
                    if (parsed) return [ context.createElement(parsed[1]) ];
                    parsed = jQuery.buildFragment([ data ], context, scripts);
                    if (scripts && scripts.length) jQuery(scripts).remove();
                    return jQuery.merge([], parsed.childNodes);
                };
                var _load = jQuery.fn.load;
                jQuery.fn.load = function(url, params, callback) {
                    if (typeof url !== "string" && _load) return _load.apply(this, arguments);
                    var selector, response, type, self = this, off = url.indexOf(" ");
                    if (off >= 0) {
                        selector = jQuery.trim(url.slice(off, url.length));
                        url = url.slice(0, off);
                    }
                    if (jQuery.isFunction(params)) {
                        callback = params;
                        params = void 0;
                    } else if (params && typeof params === "object") type = "POST";
                    if (self.length > 0) jQuery.ajax({
                        url,
                        type,
                        dataType: "html",
                        data: params
                    }).done(function(responseText) {
                        response = arguments;
                        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                    }).complete(callback && function(jqXHR, status) {
                        self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
                    });
                    return this;
                };
                jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
                    jQuery.fn[type] = function(fn) {
                        return this.on(type, fn);
                    };
                });
                jQuery.expr.filters.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, function(fn) {
                        return elem === fn.elem;
                    }).length;
                };
                var docElem = window.document.documentElement;
                function getWindow(elem) {
                    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
                }
                jQuery.offset = {
                    setOffset: function(elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                        if (position === "static") elem.style.position = "relative";
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [ curCSSTop, curCSSLeft ]) > -1;
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        } else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (jQuery.isFunction(options)) options = options.call(elem, i, curOffset);
                        if (options.top != null) props.top = options.top - curOffset.top + curTop;
                        if (options.left != null) props.left = options.left - curOffset.left + curLeft;
                        if ("using" in options) options.using.call(elem, props); else curElem.css(props);
                    }
                };
                jQuery.fn.extend({
                    offset: function(options) {
                        if (arguments.length) return options === void 0 ? this : this.each(function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        });
                        var docElem, win, box = {
                            top: 0,
                            left: 0
                        }, elem = this[0], doc = elem && elem.ownerDocument;
                        if (!doc) return;
                        docElem = doc.documentElement;
                        if (!jQuery.contains(docElem, elem)) return box;
                        if (typeof elem.getBoundingClientRect !== strundefined) box = elem.getBoundingClientRect();
                        win = getWindow(doc);
                        return {
                            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
                        };
                    },
                    position: function() {
                        if (!this[0]) return;
                        var offsetParent, offset, parentOffset = {
                            top: 0,
                            left: 0
                        }, elem = this[0];
                        if (jQuery.css(elem, "position") === "fixed") offset = elem.getBoundingClientRect(); else {
                            offsetParent = this.offsetParent();
                            offset = this.offset();
                            if (!jQuery.nodeName(offsetParent[0], "html")) parentOffset = offsetParent.offset();
                            parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                            parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
                        }
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            var offsetParent = this.offsetParent || docElem;
                            while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.offsetParent;
                            return offsetParent || docElem;
                        });
                    }
                });
                jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(method, prop) {
                    var top = /Y/.test(prop);
                    jQuery.fn[method] = function(val) {
                        return access(this, function(elem, method, val) {
                            var win = getWindow(elem);
                            if (val === void 0) return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
                            if (win) win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop()); else elem[method] = val;
                        }, method, val, arguments.length, null);
                    };
                });
                jQuery.each([ "top", "left" ], function(i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    });
                });
                jQuery.each({
                    Height: "height",
                    Width: "width"
                }, function(name, type) {
                    jQuery.each({
                        padding: "inner" + name,
                        content: type,
                        "": "outer" + name
                    }, function(defaultExtra, funcName) {
                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                            return access(this, function(elem, type, value) {
                                var doc;
                                if (jQuery.isWindow(elem)) return elem.document.documentElement["client" + name];
                                if (elem.nodeType === 9) {
                                    doc = elem.documentElement;
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return value === void 0 ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                            }, type, chainable ? margin : void 0, chainable, null);
                        };
                    });
                });
                jQuery.fn.size = function() {
                    return this.length;
                };
                jQuery.fn.andSelf = jQuery.fn.addBack;
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return jQuery;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                var _jQuery = window.jQuery, _$ = window.$;
                jQuery.noConflict = function(deep) {
                    if (window.$ === jQuery) window.$ = _$;
                    if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
                    return jQuery;
                };
                if (typeof noGlobal === strundefined) window.jQuery = window.$ = jQuery;
                return jQuery;
            });
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        var jquery = __webpack_require__(692);
        __webpack_require__(599);
        jquery(document).ready(function() {
            jquery(".glazing_slider").slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [ {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 4,
                        prevArrow: '<button class="prev arrow"></button>',
                        nextArrow: '<button class="next arrow"></button>',
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: '<button class="prev arrow"></button>',
                        nextArrow: '<button class="next arrow"></button>',
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: '<button class="prev arrow"></button>',
                        nextArrow: '<button class="next arrow"></button>',
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<button class="prev arrow"></button>',
                        nextArrow: '<button class="next arrow"></button>',
                        slidesToScroll: 1
                    }
                } ]
            });
            jquery(".decoration_slider").slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [ {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: '<button class="prev arrow"></button>',
                        nextArrow: '<button class="next arrow"></button>',
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: '<button class="prev arrow"></button>',
                        nextArrow: '<button class="next arrow"></button>',
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<button class="prev arrow"></button>',
                        nextArrow: '<button class="next arrow"></button>',
                        slidesToScroll: 1
                    }
                } ]
            });
        });
        const tabs = (tabHeaderSelector, tabSelector, contentSelector, activeClass, disp = "block") => {
            const header = document.querySelector(tabHeaderSelector), tab = document.querySelectorAll(tabSelector), content = document.querySelectorAll(contentSelector);
            const tabContentHide = () => {
                content.forEach(item => {
                    item.style.display = "none";
                });
                tab.forEach(item => {
                    item.classList.remove(activeClass);
                });
            };
            const tabContentShow = (i = 0) => {
                console.log(content, i, content[i]);
                content[i].style.display = disp;
                tab[i].classList.add(activeClass);
            };
            tabContentHide();
            tabContentShow();
            header.addEventListener("click", e => {
                e.preventDefault();
                if (e.target && (e.target.classList.contains(tabSelector.replace(/\./, "")) || e.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) tab.forEach((item, index) => {
                    if (e.target === item || e.target.parentNode === item) {
                        tabContentHide();
                        tabContentShow(index);
                    }
                });
            });
        };
        const modules_tabs = tabs;
        const modalState = {};
        const modules_modalState = modalState;
        const modals = () => {
            const bindModals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
                const trigger = document.querySelectorAll(triggerSelector), modal = document.querySelector(modalSelector), close = document.querySelector(closeSelector), popups = document.querySelectorAll("[data-modal]");
                const modalsShow = () => {
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                };
                const modalsHide = (mod = modal) => {
                    mod.style.display = "none";
                    document.body.style.overflow = "";
                };
                trigger.forEach(item => {
                    item.addEventListener("click", e => {
                        if (e.target) e.preventDefault();
                        popups.forEach(elem => {
                            modalsHide(elem);
                        });
                        if (item.classList.contains("popup_calc_btn")) ;
                        modalsShow();
                    });
                });
                close.addEventListener("click", () => {
                    modalsHide();
                });
                modal.addEventListener("click", e => {
                    if (e.target === modal && closeClickOverlay) modalsHide();
                });
            };
            bindModals(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
            bindModals(".phone_link", ".popup", ".popup .popup_close");
            bindModals(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
            bindModals(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
            bindModals(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
        };
        const modules_modals = modals;
        const checkDigitsInput = elemSelector => {
            const digitInput = document.querySelectorAll(elemSelector);
            digitInput.forEach(item => {
                item.addEventListener("input", () => {
                    item.value = item.value.replace(/\D/, "");
                });
            });
        };
        const checkDigitInput = checkDigitsInput;
        const forms_forms = () => {
            const getForms = document.querySelectorAll("form"), inputs = document.querySelectorAll("inputs");
            checkDigitInput('input[name="user_phone"]');
            const messages = {
                loading: "Отправка...",
                sucсess: "Отпревлено",
                error: "Произошла ошибка"
            };
            const postData = async (url, data) => {
                document.querySelector(".status").textContent = messages.loading;
                const res = await fetch(url, {
                    method: "POST",
                    body: data
                });
                return await res.text();
            };
            const clearInputs = () => {
                inputs.forEach(item => {
                    item.value = "";
                });
            };
            getForms.forEach(item => {
                item.addEventListener("submit", e => {
                    e.preventDefault();
                    const statusMessage = document.createElement("div");
                    statusMessage.classList.add("status");
                    item.appendChild(statusMessage);
                    const formData = new FormData(item);
                    if (item.getAttribute("data-calc") === "end") for (let key in modules_modalState) formData.append(key, modules_modalState[key]);
                    postData("files/server.php", formData).then(res => {
                        console.log(res);
                    }).catch(() => statusMessage.textContent = messages.error).finally(() => {
                        setTimeout(() => {
                            clearInputs();
                            statusMessage.remove();
                        }, 1e4);
                    });
                });
            });
        };
        const modules_forms = forms_forms;
        const chengeModalState = () => {
            const windView = document.querySelectorAll(".balcon_icons_img"), windWidth = document.querySelectorAll("#width"), windHeight = document.querySelectorAll("#height"), windType = document.querySelectorAll("#view_type"), windProfile = document.querySelectorAll(".checkbox");
            checkDigitInput("#width");
            checkDigitInput("#height");
            const bindActionToElem = (elem, event, prop) => {
                elem.forEach((item, i) => {
                    item.addEventListener(event, () => {
                        switch (item.nodeName) {
                          case "SPAN":
                            modules_modalState[prop] = i;
                            break;

                          case "INPUT":
                            if (item.getAttribute("type") === "checkbox") {
                                i === 0 ? modules_modalState[prop] = "Холодный" : modules_modalState[prop] = "Теплый";
                                elem.forEach((el, j) => {
                                    el.checked = false;
                                    if (i === j) el.checked = true;
                                });
                            } else modules_modalState[prop] = item.value;
                            break;

                          case "SELECT":
                            modules_modalState[prop] = item.value;
                            break;
                        }
                        console.log(modules_modalState);
                    });
                });
            };
            bindActionToElem(windView, "click", "view");
            bindActionToElem(windWidth, "input", "width");
            bindActionToElem(windHeight, "input", "height");
            bindActionToElem(windProfile, "input", "profile");
            bindActionToElem(windType, "change", "type");
        };
        const modules_chengeModalState = chengeModalState;
        window["FLS"] = true;
        window.addEventListener("DOMContentLoaded", () => {
            modules_chengeModalState();
            setTimeout(() => {
                modules_tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
                modules_tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
                modules_tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
            }, 1e3);
            modules_modals();
            modules_forms();
        });
    })();
})();