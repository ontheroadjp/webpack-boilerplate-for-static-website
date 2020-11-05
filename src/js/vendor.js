// fontawesome5(svg)
import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
import {faDog, faCat} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-regular-svg-icons';

library.add(faDog,faComments,faCat);

dom.i2svg();
