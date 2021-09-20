import {slider} from "../sass/slider/slider.js"
import {select} from "../sass/select/select.js"
import {download} from "../sass/download-section/download-section.js"
import {validate, checkFirstSectionFilled, checkSecondSectionFilled} from "../sass/form-about/form-about.js"
import {detectFilled} from "../sass/input/input.js"
slider()
select()
download()
validate()
checkFirstSectionFilled()
checkSecondSectionFilled()
detectFilled()