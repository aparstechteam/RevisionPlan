(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ot})),n.d(e,"b",(function(){return Et}));var r=n("5606"),i=n("ffa6"),o=n("abfd"),s=n("a8e9");n("c7b2");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.0.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new o["b"]("@firebase/firestore");function l(t,...e){if(u.logLevel<=o["a"].DEBUG){const n=e.map(f);u.debug(`Firestore (${c}): ${t}`,...n)}}function h(t,...e){if(u.logLevel<=o["a"].ERROR){const n=e.map(f);u.error(`Firestore (${c}): ${t}`,...n)}}function f(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t="Unexpected state"){const e=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+t;throw h(e),new Error(e)}function p(t,e){t||d()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class b{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(a.UNAUTHENTICATED))}shutdown(){}}class O{constructor(t){this.t=t,this.currentUser=a.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new m;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new m,t.enqueueRetryable(()=>r(this.currentUser))};const o=e=>{t.enqueueRetryable(async()=>{l("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)})};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(l("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new m)}},0),t.enqueueRetryable(async()=>{0===this.i&&(await i.promise,await r(this.currentUser))})}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(l("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(p("string"==typeof e.accessToken),new y(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return p(null===t||"string"==typeof t),new a(t)}}class w{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=a.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class _{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new w(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(a.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */E.T=-1;class I{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function T(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(t,e,n){void 0===e?e=0:e>t.length&&d(),void 0===n?n=t.length-e:n>t.length-e&&d(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===S.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof S?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class A extends S{construct(t,e,n){return new A(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new g(v.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new A(e)}static emptyPath(){return new A([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new k(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new k(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return T(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}k.EMPTY_BYTE_STRING=new k("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t){this.path=t}static fromPath(t){return new x(A.fromString(t))}static fromName(t){return new x(A.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===A.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return A.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new A(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function R(t){return new C(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var P,N;(N=P||(P={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){this.comparator=t,this.root=e||D.EMPTY}insert(t,e){return new L(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,D.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,D.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new M(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new M(this.root,t,this.comparator,!1)}getReverseIterator(){return new M(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new M(this.root,t,this.comparator,!0)}}class M{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class D{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:D.RED,this.left=null!=r?r:D.EMPTY,this.right=null!=i?i:D.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new D(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return D.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return D.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,D.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,D.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw d();if(this.right.isRed())throw d();const t=this.left.check();if(t!==this.right.check())throw d();return t+(this.isRed()?0:1)}}D.EMPTY=null,D.RED=!0,D.BLACK=!1,D.EMPTY=new class{constructor(){this.size=0}get key(){throw d()}get value(){throw d()}get color(){throw d()}get left(){throw d()}get right(){throw d()}copy(t,e,n,r,i){return this}insert(t,e,n){return new D(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new U(this.data.getIterator())}getIteratorFrom(t){return new U(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof F))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new F(this.comparator);return e.data=t,e}}class U{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new L(x.comparator);new L(x.comparator);new L(x.comparator);new F(x.comparator);new F(T);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$(e)),e=B(t.get(n),e);return $(e)}function B(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function $(t){return t+""}class H{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}H.store="owner",H.key="owner";class z{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}z.store="mutationQueues",z.keyPath="userId";class G{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}G.store="mutations",G.keyPath="batchId",G.userMutationsIndex="userMutationsIndex",G.userMutationsKeyPath=["userId","batchId"];class W{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,V(e)]}static key(t,e,n){return[t,V(e),n]}}W.store="documentMutations",W.PLACEHOLDER=new W;class q{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}q.store="remoteDocuments",q.readTimeIndex="readTimeIndex",q.readTimeIndexPath="readTime",q.collectionReadTimeIndex="collectionReadTimeIndex",q.collectionReadTimeIndexPath=["parentPath","readTime"];class K{constructor(t){this.byteSize=t}}K.store="remoteDocumentGlobal",K.key="remoteDocumentGlobalKey";class J{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}J.store="targets",J.keyPath="targetId",J.queryTargetsIndexName="queryTargetsIndex",J.queryTargetsKeyPath=["canonicalId","targetId"];class X{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}X.store="targetDocuments",X.keyPath=["targetId","path"],X.documentTargetsIndex="documentTargetsIndex",X.documentTargetsKeyPath=["path","targetId"];class Y{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Y.key="targetGlobalKey",Y.store="targetGlobal";class Z{constructor(t,e){this.collectionId=t,this.parent=e}}Z.store="collectionParents",Z.keyPath=["collectionId","parent"];class Q{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}Q.store="clientMetadata",Q.keyPath="clientId";class tt{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}tt.store="bundles",tt.keyPath="bundleId";class et{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}et.store="namedQueries",et.keyPath="name";z.store,G.store,W.store,q.store,J.store,H.store,Y.store,X.store,Q.store,K.store,Z.store,tt.store,et.store;function nt(t){return"IndexedDbTransactionError"===t.name}class rt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new rt(t,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(41943040,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);function it(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&l("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new m,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new st(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new g(v.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function at(t,e){if(h("AsyncQueue",`${e}: ${t}`),nt(t))return new g(v.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=a.UNAUTHENTICATED,this.clientId=I.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{l("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new m;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=at(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}class ut{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class lt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof lt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e,n){if(!n)throw new g(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dt(t,e,n,r){if(!0===e&&!0===r)throw new g(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pt(t){if(x.isDocumentKey(t))throw new g(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new g(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new g(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,dt("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vt({}),this._settingsFrozen=!1,t instanceof lt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new g(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lt(t.options.projectId)}(t))}get app(){if(!this._app)throw new g(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new g(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vt(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new b;switch(t.type){case"gapi":t.client;return p(!("object"!=typeof r["e"]||null===r["e"]||!r["e"].auth||!r["e"].auth.getAuthHeaderValueForFirstParty)),new _(r["e"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new g(v.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ht.get(t);e&&(l("ComponentProvider","Removing Datastore"),ht.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class yt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yt(this.firestore,t,this._query)}}class bt extends yt{constructor(t,e,n){super(t,e,R(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new x(t))}withConverter(t){return new bt(this.firestore,t,this._path)}}function Ot(t,e,...n){if(t=Object(s["i"])(t),ft("collection","path",e),t instanceof gt){const r=A.fromString(e,...n);return pt(r),new bt(t,null,r)}{if(!(t instanceof mt||t instanceof bt))throw new g(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=A.fromString(t.path,...n).child(A.fromString(e));return pt(r),new bt(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ot(this,"async_queue_retry"),this.Ea=()=>{const t=it();t&&l("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=it();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=it();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new m;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!nt(t))throw t;l("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,h("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=st.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&d()}verifyOperationInProgress(){}async Pa(){let t;do{t=this.fa,await t}while(t!==this.fa)}ba(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.Pa().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pa()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class _t extends gt{constructor(t,e){super(t,e),this.type="firestore",this._queue=new wt,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||jt(this),this._firestoreClient.terminate()}}function Et(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function jt(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new ut(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ct(t._credentials,t._queue,r)}new RegExp("[~\\*/\\[\\]]");var It;!function(t){c=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new _t(n,new O(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["g"])("@firebase/firestore","3.0.1",It)}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?r(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,o="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var h=n+t.length,f=c.length,d=a;return void 0!==u&&(u=r(u),d=s),o.call(l,d,(function(r,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(h);case"<":s=u[o.slice(1,-1)];break;default:var a=+o;if(0===a)return r;if(a>f){var l=i(a/10);return 0===l?r:l<=f?void 0===c[l-1]?o.charAt(1):c[l-1]+o.charAt(1):r}s=c[a-1]}return void 0===s?"":s}))}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),s=n("9112");for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,f,d,p,v,g,m,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),_=s(e,y,1+b+w),E=function(t){return h&&u(h,"normal",t),new l(!0,t)},j=function(t){return b?(r(t),w?_(t[0],t[1],E):_(t[0],t[1])):w?_(t,E):_(t)};if(O)h=t;else{if(f=c(t),"function"!=typeof f)throw TypeError("Target is not iterable");if(i(f)){for(d=0,p=o(t.length);p>d;d++)if(v=j(t[d]),v&&v instanceof l)return v;return new l(!1)}h=a(t,f)}g=h.next;while(!(m=g.call(h)).done){try{v=j(m.value)}catch(I){u(h,"throw",I)}if("object"==typeof v&&v&&v instanceof l)return v}return new l(!1)}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,v=t.target,g=t.global,m=t.stat;if(l=g?r:m?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:v+(m?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var i="firebase",o="9.0.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t,e,n){var i,o;r(t);try{if(i=t["return"],void 0===i){if("throw"===e)throw n;return n}i=i.call(t)}catch(s){o=!0,i=s}if("throw"===e)throw n;if(o)throw i;return r(i),n}},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("d039"),u=n("0366"),l=n("1be4"),h=n("cc12"),f=n("1cdc"),d=n("605d"),p=a.setImmediate,v=a.clearImmediate,g=a.process,m=a.MessageChannel,y=a.Dispatch,b=0,O={},w="onreadystatechange";try{r=a.location}catch(T){}var _=function(t){if(O.hasOwnProperty(t)){var e=O[t];delete O[t],e()}},E=function(t){return function(){_(t)}},j=function(t){_(t.data)},I=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};p&&v||(p=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return O[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},i(b),b},v=function(t){delete O[t]},d?i=function(t){g.nextTick(E(t))}:y&&y.now?i=function(t){y.now(E(t))}:m&&!f?(o=new m,s=o.port2,o.port1.onmessage=j,i=u(s.postMessage,s,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&r&&"file:"!==r.protocol&&!c(I)?(i=I,a.addEventListener("message",j,!1)):i=w in h("script")?function(t){l.appendChild(h("script"))[w]=function(){l.removeChild(this),_(t)}}:function(t){setTimeout(E(t),0)}),t.exports={set:p,clear:v}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"323e":function(t,e,n){var r,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(o,s){r=s,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i)})(0,(function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function r(t){return 100*(-1+t)}function i(t,n,i){var o;return o="translate3d"===e.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"},o.transition="all "+n+"ms "+i,o}t.configure=function(t){var n,r;for(n in t)r=t[n],void 0!==r&&t.hasOwnProperty(n)&&(e[n]=r);return this},t.status=null,t.set=function(r){var a=t.isStarted();r=n(r,e.minimum,1),t.status=1===r?null:r;var c=t.render(!a),u=c.querySelector(e.barSelector),l=e.speed,h=e.easing;return c.offsetWidth,o((function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(u,i(r,l,h)),1===r?(s(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){s(c,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){t.remove(),n()}),l)}),l)):setTimeout(n,l)})),this},t.isStarted=function(){return"number"===typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout((function(){t.status&&(t.trickle(),n())}),e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var r=t.status;return r?("number"!==typeof e&&(e=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always((function(){n--,0===n?(e=0,t.done()):t.set((e-n)/e)})),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=e.template;var o,a=i.querySelector(e.barSelector),u=n?"-100":r(t.status||0),l=document.querySelector(e.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),e.showSpinner||(o=i.querySelector(e.spinnerSelector),o&&h(o)),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(i),i},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()}))}function r(e){var n=document.body.style;if(e in n)return e;var r,i=t.length,o=e.charAt(0).toUpperCase()+e.slice(1);while(i--)if(r=t[i]+o,r in n)return r;return e}function i(t){return t=n(t),e[t]||(e[t]=r(t))}function o(t,e,n){e=i(e),t.style[e]=n}return function(t,e){var n,r,i=arguments;if(2==i.length)for(n in e)r=e[n],void 0!==r&&e.hasOwnProperty(n)&&o(t,n,r);else o(t,i[1],i[2])}}();function a(t,e){var n="string"==typeof t?t:l(t);return n.indexOf(" "+e+" ")>=0}function c(t,e){var n=l(t),r=n+e;a(n,e)||(t.className=r.substring(1))}function u(t,e){var n,r=l(t);a(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function l(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t}))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("3f8c"),o=n("b622"),s=o("iterator");t.exports=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||i[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),e&&o.length===e)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}n("fb6a"),n("b0c0"),n("a630");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return r(t)||i(t,e)||s(t,e)||a()}},"3aa8":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return y}));
/**
  * vee-validate v4.4.7
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
const r={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},i=t=>{if(t)return Array.isArray(t)?t[0]:t.locale};function o(t,e){return Array.isArray(t)?t[0]:t[e]}function s(t){return null===t||void 0===t||""===t||!(!Array.isArray(t)||0!==t.length)}const a=(t,e)=>{if(s(t))return!0;const n=i(e);if(Array.isArray(t))return t.every(t=>a(t,{locale:n}));const o=String(t);return n?(r[n]||r.en).test(o):Object.keys(r).some(t=>r[t].test(o))};const c=(t,e)=>{const n=o(e,"target");return String(t)===String(n)};const u=t=>{if(s(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(t=>e.test(String(t))):e.test(String(t))};function l(t){return null===t||void 0===t}function h(t){return Array.isArray(t)&&0===t.length}const f=(t,e)=>{if(s(t))return!0;const n=o(e,"length");return Array.isArray(t)?t.every(t=>f(t,{length:n})):String(t).length<=Number(n)},d=(t,e)=>{if(s(t))return!0;const n=o(e,"max");return Array.isArray(t)?t.length>0&&t.every(t=>d(t,{max:n})):Number(t)<=Number(n)},p=(t,e)=>{if(s(t))return!0;const n=o(e,"length");return Array.isArray(t)?t.every(t=>p(t,{length:n})):String(t).length>=Number(n)},v=(t,e)=>{if(s(t))return!0;const n=o(e,"min");return Array.isArray(t)?t.length>0&&t.every(t=>v(t,{min:n})):Number(t)>=Number(n)},g=(t,e)=>!!s(t)||(Array.isArray(t)?t.every(t=>g(t,e)):Array.from(e).some(e=>e==t)),m=(t,e)=>!!s(t)||!g(t,e),y=t=>!l(t)&&!h(t)&&!1!==t&&!!String(t).trim().length},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f4e":function(t,e,n){"use strict";n.d(e,"setupDevtoolsPlugin",(function(){return o}));var r=n("abc5"),i=n("b774");function o(t,e){const n=Object(r["a"])();if(n)n.emit(i["a"],t,e);else{const n=Object(r["b"])(),i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:e})}}},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("861d");t.exports=function(t,e){var n,i;if("string"===e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),s=n("e95a"),a=n("50c4"),c=n("8418"),u=n("9a1f"),l=n("35a1");t.exports=function(t){var e,n,h,f,d,p,v=i(t),g="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,b=void 0!==y,O=l(v),w=0;if(b&&(y=r(y,m>2?arguments[2]:void 0,2)),void 0==O||g==Array&&s(O))for(e=a(v.length),n=new g(e);e>w;w++)p=b?y(v[w],w):v[w],c(n,w,p);else for(f=u(v,O),d=f.next,n=new g;!(h=d.call(f)).done;w++)p=b?o(f,y,[h.value,w],!0):h.value,c(n,w,p);return n.length=w,n}},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("d039"),o=n("825a"),s=n("a691"),a=n("50c4"),c=n("577e"),u=n("1d80"),l=n("8aa5"),h=n("0cb2"),f=n("14c3"),d=n("b622"),p=d("replace"),v=Math.max,g=Math.min,m=function(t){return void 0===t?t:String(t)},y=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),O=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=b?"$":"$0";return[function(t,n){var r=u(this),i=void 0==t?void 0:t[p];return void 0!==i?i.call(t,r,n):e.call(c(r),t,n)},function(t,i){var u=o(this),d=c(t);if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var p=n(e,u,d,i);if(p.done)return p.value}var y="function"===typeof i;y||(i=c(i));var b=u.global;if(b){var O=u.unicode;u.lastIndex=0}var w=[];while(1){var _=f(u,d);if(null===_)break;if(w.push(_),!b)break;var E=c(_[0]);""===E&&(u.lastIndex=l(d,a(u.lastIndex),O))}for(var j="",I=0,T=0;T<w.length;T++){_=w[T];for(var S=c(_[0]),A=v(g(s(_.index),d.length),0),k=[],x=1;x<_.length;x++)k.push(m(_[x]));var C=_.groups;if(y){var R=[S].concat(k,A,d);void 0!==C&&R.push(C);var P=c(i.apply(void 0,R))}else P=h(S,d,A,k,C,i);A>=I&&(j+=d.slice(I,A)+P,I=A+S.length)}return j+d.slice(I)}]}),!O||!y||b)},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return J})),n.d(e,"b",(function(){return Q})),n.d(e,"c",(function(){return Z}));var r=n("7a23"),i=n("3f4e"),o="store";function s(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function l(t,e){return function(){return t(e)}}function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,a={};s(o,(function(e,n){a[n]=l(e,t),Object.defineProperty(t.getters,n,{get:function(){return a[n]()},enumerable:!0})})),t._state=Object(r["A"])({data:e}),t.strict&&O(t),i&&n&&t._withCommit((function(){i.data=null}))}function p(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[s]=r),!o&&!i){var a=w(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=v(t,s,n);r.forEachMutation((function(e,n){var r=s+n;m(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;y(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;b(t,r,e,u)})),r.forEachChild((function(r,o){p(t,e,n.concat(o),r,i)}))}function v(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=_(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?t.commit:function(n,r,i){var o=_(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return g(t,e)}},state:{get:function(){return w(t.state,n)}}}),i}function g(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function m(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function y(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function b(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function O(t){Object(r["L"])((function(){return t._state.data}),(function(){u(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(t,e){return e.reduce((function(t,e){return t[e]}),t)}function _(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),u("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var E="vuex bindings",j="vuex:mutations",I="vuex:actions",T="vuex",S=0;function A(t,e){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:j,label:"Vuex Mutations",color:k}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:k}),n.addInspector({id:T,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===T)if(n.filter){var r=[];L(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===T){var r=n.nodeId;g(e,r),n.state=M(F(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===T){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(T),n.sendInspectorState(T),n.addTimelineEvent({layerId:j,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=S++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:I,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var k=8702998,x=6710886,C=16777215,R={label:"namespaced",textColor:C,backgroundColor:x};function P(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function N(t,e){return{id:e||"root",label:P(e),tags:t.namespaced?[R]:[],children:Object.keys(t._children).map((function(n){return N(t._children[n],e+n+"/")}))}}function L(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[R]:[]}),Object.keys(e._children).forEach((function(i){L(t,e._children[i],n,r+i+"/")}))}function M(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var o=D(e);i.getters=Object.keys(o).map((function(t){return{key:t.endsWith("/")?P(t):t,editable:!1,value:U((function(){return o[t]}))}}))}return i}function D(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,o=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[o]=U((function(){return t[n]}))}else e[n]=U((function(){return t[n]}))})),e}function F(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var o=t[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children}),"root"===e?t:t.root._children)}function U(t){try{return t()}catch(e){return e}}var V=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(t,e){this._children[t]=e},V.prototype.removeChild=function(t){delete this._children[t]},V.prototype.getChild=function(t){return this._children[t]},V.prototype.hasChild=function(t){return t in this._children},V.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},V.prototype.forEachChild=function(t){s(this._children,t)},V.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},V.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},V.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(V.prototype,B);var $=function(t){this.register([],t,!1)};function H(t,e,n){if(q(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");H(t.concat(r),e.getChild(r),n.modules[r])}}$.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},$.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},$.prototype.update=function(t){H([],this.root,t)},$.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),q(t,e);var i=new V(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&s(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},$.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},$.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var z={assert:function(t){return"function"===typeof t},expected:"function"},G={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},W={getters:z,mutations:z,actions:G};function q(t,e){Object.keys(W).forEach((function(n){if(e[n]){var r=W[n];s(e[n],(function(e,i){u(r.assert(e),K(t,n,i,e,r.expected))}))}}))}function K(t,e,n,r,i){var o=e+" should be "+i+' but "'+e+"."+n+'"';return t.length>0&&(o+=' in module "'+t.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function J(t){return new X(t)}var X=function t(e){var n=this;void 0===e&&(e={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new $(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),d(this,h),r.forEach((function(t){return t(n)}))},Y={state:{configurable:!0}};X.prototype.install=function(t,e){t.provide(e||o,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&A(t,this)},Y.state.get=function(){return this._state.data},Y.state.set=function(t){u(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(t,e,n){var r=this,i=_(t,e,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},X.prototype.dispatch=function(t,e){var n=this,r=_(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+i)},X.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},X.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return h(n,this._actionSubscribers,e)},X.prototype.watch=function(t,e,n){var i=this;return u("function"===typeof t,"store.watch only accepts a function."),Object(r["L"])((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},X.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},X.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),u(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},X.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=w(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),f(this)},X.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},X.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},X.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(X.prototype,Y);var Z=nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=rt(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),Q=(nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=rt(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||rt(this.$store,"mapGetters",t)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})));nt((function(t,e){var n={};return et(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),tt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=rt(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function tt(t){return et(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function et(t){return Array.isArray(t)||a(t)}function nt(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function rt(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return q})),n.d(e,"b",(function(){return $})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return H})),n.d(e,"e",(function(){return J})),n.d(e,"f",(function(){return K})),n.d(e,"g",(function(){return X}));var r=n("ffa6"),i=n("abfd"),o=n("a8e9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.0",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",g="@firebase/auth",m="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",O="@firebase/functions",w="@firebase/functions-compat",_="@firebase/installations",E="@firebase/installations-compat",j="@firebase/messaging",I="@firebase/messaging-compat",T="@firebase/performance",S="@firebase/performance-compat",A="@firebase/remote-config",k="@firebase/remote-config-compat",x="@firebase/storage",C="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",N="firebase",L="9.0.0",M="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[m]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[O]:"fire-fn",[w]:"fire-fn-compat",[_]:"fire-iid",[E]:"fire-iid-compat",[j]:"fire-fcm",[I]:"fire-fcm-compat",[T]:"fire-perf",[S]:"fire-perf-compat",[A]:"fire-rc",[k]:"fire-rc-compat",[x]:"fire-gcs",[C]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function $(t,e){return t.container.getProvider(e)}function H(t,e,n=M){$(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new o["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=L;function K(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["g"])(t,s.options)&&Object(o["g"])(n,s.config))return s;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new W(t,n,a);return F.set(i,c),c}function J(t=M){const e=F.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function X(t,e,n){var i;let o=null!==(i=D[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(t){B(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),X(c,u,t),X("fire-js","")}Y()},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("d9b5");t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||o(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=s.f,f=a.f;while(i>l){var d,p=u(arguments[l++]),v=h?o(p).concat(h(p)):o(p),g=v.length,m=0;while(g>m)d=v[m++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:l},6547:function(t,e,n){var r=n("a691"),i=n("577e"),o=n("1d80"),s=function(t){return function(e,n){var s,a,c=i(o(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(s=c.charCodeAt(u),s<55296||s>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):s:t?c.slice(u,u+2):a-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",v=a.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},m=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var y=h.state||(h.state=new v),b=y.get,O=y.has,w=y.set;r=function(t,e){if(O.call(y,t))throw new TypeError(p);return e.facade=t,w.call(y,t,e),e},i=function(t){return b.call(y,t)||{}},o=function(t){return O.call(y,t)}}else{var _=f("state");d[_]=!0,r=function(t,e){if(l(t,_))throw new TypeError(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},o=function(t){return l(t,_)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:m}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Qt})),n.d(e,"b",(function(){return z}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>i?Symbol(t):"_vr_"+t,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const v=()=>{};const g=/\/$/,m=t=>t.replace(g,"");function y(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),o=e.slice(a+1,c>-1?c:e.length),i=t(o)),c>-1&&(r=r||e.slice(0,c),s=e.slice(c,e.length)),r=T(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function O(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function w(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&_(e.matched[r],n.matched[i])&&E(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function E(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!j(t[n],e[n]))return!1;return!0}function j(t,e){return Array.isArray(t)?I(t,e):Array.isArray(e)?I(e,t):t===e}function I(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function T(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var S,A;(function(t){t["pop"]="pop",t["push"]="push"})(S||(S={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(A||(A={}));function k(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),m(t)}const x=/^[^#]+#/;function C(t,e){return t.replace(x,"#")+e}function R(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=R(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function L(t,e){const n=history.state?history.state.position-e:-1;return n+t}const M=new Map;function D(t,e){M.set(t,e)}function F(t){const e=M.get(t);return M.delete(t),e}let U=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),O(n,"")}const s=O(n,t);return s+r+i}function B(t,e,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:S.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){s=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:P()}),"")}function h(){for(const t of o)t();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?P():null}}function H(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:U()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=d({},e.state,$(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function a(t,n){const s=d({},i.value,e.state,{forward:t,scroll:P()});o(s.current,s,!0);const a=d({},$(r.value,t,null),{position:s.position+1},n);o(t,a,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function z(t){t=k(t);const e=H(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:C.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function G(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var J;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(J||(J={}));function X(t,e){return d(new Error,{type:t,[K]:!0},e)}function Y(t,e){return t instanceof Error&&K in t&&(null==e||!!(t.type&e))}const Z="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Q,e),r=[];let i=n.start?"^":"";const o=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;o.push({name:t,repeatable:n,optional:a});const h=c||Z;if(h!==Z){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:o,repeatable:s,optional:a}=t,c=o in e?e[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},ot=/[a-zA-Z0-9_]/;function st(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ot.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function at(t,e,n){const r=et(st(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!ft(h)&&s(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)o(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{s(f)}:v}function s(t){if(W(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,o,s,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw X(1,{location:t});s=i.record.name,a=d(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),o=i.stringify(a)}else if("path"in t)o=t.path,i=n.find(t=>t.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw X(1,{location:t,currentLocation:e});s=i.record.name,a=d({},e.params,t.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>o(t)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const vt=/#/g,gt=/&/g,mt=/\//g,yt=/=/g,bt=/\?/g,Ot=/\+/g,wt=/%5B/g,_t=/%5D/g,Et=/%5E/g,jt=/%60/g,It=/%7B/g,Tt=/%7C/g,St=/%7D/g,At=/%20/g;function kt(t){return encodeURI(""+t).replace(Tt,"|").replace(wt,"[").replace(_t,"]")}function xt(t){return kt(t).replace(It,"{").replace(St,"}").replace(Et,"^")}function Ct(t){return kt(t).replace(Ot,"%2B").replace(At,"+").replace(vt,"%23").replace(gt,"%26").replace(jt,"`").replace(It,"{").replace(St,"}").replace(Et,"^")}function Rt(t){return Ct(t).replace(yt,"%3D")}function Pt(t){return kt(t).replace(vt,"%23").replace(bt,"%3F")}function Nt(t){return null==t?"":Pt(t).replace(mt,"%2F")}function Lt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Mt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(Ot," "),n=t.indexOf("="),o=Lt(n<0?t:t.slice(0,n)),s=n<0?null:Lt(t.slice(n+1));if(o in e){let t=e[o];Array.isArray(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Dt(t){let e="";for(let n in t){const r=t[n];if(n=Rt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&Ct(t)):[r&&Ct(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=t=>{!1===t?a(X(4,{from:n,to:e})):t instanceof Error?a(t):G(t)?a(X(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),s())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const o of t)for(const t in o.components){let s=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if($t(s)){const a=s.__vccOpts||s,c=a[e];c&&i.push(Vt(c,n,r,o,t))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const s=f(i)?i.default:i;o.components[t]=s;const a=s.__vccOpts||s,c=a[e];return c&&Vt(c,n,r,o,t)()}))}}return i}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=Object(r["n"])(c),n=Object(r["n"])(u),i=Object(r["b"])(()=>e.resolve(Object(r["I"])(t.to))),o=Object(r["b"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(_.bind(null,r));if(s>-1)return s;const a=Kt(t[e-2]);return e>1&&Kt(r)===a&&o[o.length-1].path!==a?o.findIndex(_.bind(null,t[e-2])):s}),s=Object(r["b"])(()=>o.value>-1&&qt(n.params,i.value.params)),a=Object(r["b"])(()=>o.value>-1&&o.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return Wt(n)?e[Object(r["I"])(t.replace)?"replace":"push"](Object(r["I"])(t.to)).catch(v):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const zt=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=Object(r["A"])(Ht(t)),{options:i}=Object(r["n"])(c),o=Object(r["b"])(()=>({[Jt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["m"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=zt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Kt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["n"])(l),o=Object(r["b"])(()=>t.route||i.value),c=Object(r["n"])(a,0),u=Object(r["b"])(()=>o.value.matched[c]);Object(r["y"])(a,c+1),Object(r["y"])(s,u),Object(r["y"])(l,o);const h=Object(r["B"])();return Object(r["L"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&_(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[t.name],c=t.name;if(!a)return Yt(n.default,{Component:a,route:i});const l=s.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(s.instances[c]=null)},v=Object(r["m"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Yt(n.default,{Component:v,route:i})||v}}});function Yt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Zt=Xt;function Qt(t){const e=ct(t.routes,t),n=t.parseQuery||Mt,i=t.stringifyQuery||Dt,o=t.history;const s=Ut(),a=Ut(),f=Ut(),g=Object(r["F"])(q);let m=q;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const O=p.bind(null,t=>""+t),_=p.bind(null,Nt),E=p.bind(null,Lt);function j(t,n){let r,i;return W(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function I(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function T(){return e.getRoutes().map(t=>t.record)}function A(t){return!!e.getRecordMatcher(t)}function k(t,r){if(r=d({},r||g.value),"string"===typeof t){const i=y(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return d(i,s,{params:E(s.params),hash:Lt(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in t)s=d({},t,{path:y(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];s=d({},t,{params:_(t.params)}),r.params=_(r.params)}const a=e.resolve(s,r),c=t.hash||"";a.params=O(E(a.params));const u=b(i,d({},t,{hash:xt(c),path:a.path})),l=o.createHref(u);return d({fullPath:u,hash:c,query:i===Dt?Ft(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function x(t){return"string"===typeof t?y(n,t,g.value.path):d({},t)}function C(t,e){if(m!==t)return X(8,{from:e,to:t})}function R(t){return V(t)}function M(t){return R(d(x(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=m=k(t),r=g.value,o=t.state,s=t.force,a=!0===t.replace,c=U(n);if(c)return V(d(x(c),{state:o,force:s,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!s&&w(i,r,n)&&(l=X(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch(t=>Y(t)?t:tt(t,u,r)).then(t=>{if(t){if(Y(t,2))return V(d(x(t.to),{state:o,force:s,replace:a}),e||u)}else t=z(u,r,!0,a,o);return H(u,r,t),t})}function B(t,e){const n=C(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t,e){let n;const[r,i,o]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Vt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of s.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Vt(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Vt(i,t,e));else n.push(Vt(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(o,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).catch(t=>Y(t,8)?t:Promise.reject(t))}function H(t,e,n){for(const r of f.list())r(t,e,n)}function z(t,e,n,r,i){const s=C(t,e);if(s)return s;const a=e===q,c=h?history.state:{};n&&(r||a?o.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),g.value=t,rt(t,e,n,a),nt()}let G;function K(){G=o.listen((t,e,n)=>{const r=k(t),i=U(r);if(i)return void V(d(i,{replace:!0}),r).catch(v);m=r;const s=g.value;h&&D(L(s.fullPath,n.delta),P()),$(r,s).catch(t=>Y(t,12)?t:Y(t,2)?(V(t.to,r).then(t=>{Y(t,20)&&!n.delta&&n.type===S.pop&&o.go(-1,!1)}).catch(v),Promise.reject()):(n.delta&&o.go(-n.delta,!1),tt(t,r,s))).then(t=>{t=t||z(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===S.pop&&Y(t,20)&&o.go(-1,!1)),H(r,s,t)}).catch(v)})}let J,Z=Ut(),Q=Ut();function tt(t,e,n){nt(t);const r=Q.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return J&&g.value!==q?Promise.resolve():new Promise((t,e)=>{Z.add([t,e])})}function nt(t){J||(J=!0,K(),Z.list().forEach(([e,n])=>t?n(t):e()),Z.reset())}function rt(e,n,i,o){const{scrollBehavior:s}=t;if(!h||!s)return Promise.resolve();const a=!i&&F(L(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["p"])().then(()=>s(e,n,a)).then(t=>t&&N(t)).catch(t=>tt(t,e,n))}const it=t=>o.go(t);let ot;const st=new Set,at={currentRoute:g,addRoute:j,removeRoute:I,hasRoute:A,getRoutes:T,resolve:k,options:t,push:R,replace:M,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Q.add,isReady:et,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",Zt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["I"])(g)}),h&&!ot&&g.value===q&&(ot=!0,R(o.location).catch(t=>{0}));const n={};for(const o in q)n[o]=Object(r["b"])(()=>g.value[o]);t.provide(c,e),t.provide(u,Object(r["A"])(n)),t.provide(l,g);const i=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(m=q,G&&G(),g.value=q,ot=!1,J=!1),i()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find(t=>_(t,o))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find(t=>_(t,a))||i.push(a))}return[n,r,i]}},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),c=l(n),c.source||(c.source=h.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(t,e,n){"use strict";n.d(e,"b",(function(){return Kt})),n.d(e,"o",(function(){return Dt})),n.d(e,"A",(function(){return It})),n.d(e,"B",(function(){return Ft})),n.d(e,"F",(function(){return Ut})),n.d(e,"H",(function(){return Wt})),n.d(e,"I",(function(){return $t})),n.d(e,"q",(function(){return r["H"]})),n.d(e,"G",(function(){return r["K"]})),n.d(e,"a",(function(){return Hn})),n.d(e,"d",(function(){return er})),n.d(e,"e",(function(){return pr})),n.d(e,"f",(function(){return tr})),n.d(e,"g",(function(){return ar})),n.d(e,"h",(function(){return dr})),n.d(e,"i",(function(){return fr})),n.d(e,"j",(function(){return cr})),n.d(e,"k",(function(){return je})),n.d(e,"l",(function(){return Sr})),n.d(e,"m",(function(){return Ni})),n.d(e,"n",(function(){return de})),n.d(e,"p",(function(){return gi})),n.d(e,"r",(function(){return Ae})),n.d(e,"s",(function(){return Ve})),n.d(e,"t",(function(){return ke})),n.d(e,"u",(function(){return De})),n.d(e,"v",(function(){return Be})),n.d(e,"w",(function(){return Jn})),n.d(e,"x",(function(){return ne})),n.d(e,"y",(function(){return fe})),n.d(e,"z",(function(){return ee})),n.d(e,"C",(function(){return br})),n.d(e,"D",(function(){return Fn})),n.d(e,"E",(function(){return Vn})),n.d(e,"K",(function(){return qr})),n.d(e,"L",(function(){return ki})),n.d(e,"M",(function(){return re})),n.d(e,"N",(function(){return En})),n.d(e,"c",(function(){return Uo})),n.d(e,"J",(function(){return Lo}));var r=n("9ff4");let i;const o=[];class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&v)>0,l=t=>(t.n&v)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=v},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~v,i.n&=~v}e.length=n}},d=new WeakMap;let p=0,v=1;const g=30,m=[];let y;const b=Symbol(""),O=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!m.includes(this))try{return m.push(y=this),T(),v=1<<++p,p<=g?h(this):_(this),this.fn()}finally{p<=g&&f(this),v=1<<--p,S(),m.pop();const t=m.length;y=t>0?m[t-1]:void 0}}stop(){this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const j=[];function I(){j.push(E),E=!1}function T(){j.push(E),E=!0}function S(){const t=j.pop();E=void 0===t||t}function A(t,e,n){if(!k())return;let r=d.get(t);r||d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;x(i,o)}function k(){return E&&void 0!==y}function x(t,e){let n=!1;p<=g?l(t)||(t.n|=v,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function C(t,e,n,i,o,s){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["n"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["n"])(t)?Object(r["r"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["s"])(t)&&u.push(a.get(O)));break;case"delete":Object(r["n"])(t)||(u.push(a.get(b)),Object(r["s"])(t)&&u.push(a.get(O)));break;case"set":Object(r["s"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&R(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);R(c(t))}}function R(t,e){for(const n of Object(r["n"])(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=Object(r["G"])("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["D"])),L=V(),M=V(!1,!0),D=V(!0),F=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Rt(this);for(let e=0,i=this.length;e<i;e++)A(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Rt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){I();const n=Rt(this)[e].apply(this,t);return S(),n}}),t}function V(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&o===(t?e?_t:wt:e?Ot:bt).get(n))return n;const s=Object(r["n"])(n);if(!t&&s&&Object(r["j"])(F,i))return Reflect.get(F,i,o);const a=Reflect.get(n,i,o);if(Object(r["D"])(i)?N.has(i):P(i))return a;if(t||A(n,"get",i),e)return a;if(Dt(a)){const t=!s||!Object(r["r"])(i);return t?a.value:a}return Object(r["u"])(a)?t?St(a):It(a):a}}const B=H(),$=H(!0);function H(t=!1){return function(e,n,i,o){let s=e[n];if(!t&&(i=Rt(i),s=Rt(s),!Object(r["n"])(e)&&Dt(s)&&!Dt(i)))return s.value=i,!0;const a=Object(r["n"])(e)&&Object(r["r"])(n)?Number(n)<e.length:Object(r["j"])(e,n),c=Reflect.set(e,n,i,o);return e===Rt(o)&&(a?Object(r["i"])(i,s)&&C(e,"set",n,i,s):C(e,"add",n,i)),c}}function z(t,e){const n=Object(r["j"])(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&C(t,"delete",e,void 0,i),o}function G(t,e){const n=Reflect.has(t,e);return Object(r["D"])(e)&&N.has(e)||A(t,"has",e),n}function W(t){return A(t,"iterate",Object(r["n"])(t)?"length":b),Reflect.ownKeys(t)}const q={get:L,set:B,deleteProperty:z,has:G,ownKeys:W},K={get:D,set(t,e){return!0},deleteProperty(t,e){return!0}},J=Object(r["h"])({},q,{get:M,set:$}),X=t=>Object(r["u"])(t)?It(t):t,Y=t=>Object(r["u"])(t)?St(t):t,Z=t=>t,Q=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Rt(t),o=Rt(e);e!==o&&!n&&A(i,"get",e),!n&&A(i,"get",o);const{has:s}=Q(i),a=r?Z:n?Y:X;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function et(t,e=!1){const n=this["__v_raw"],r=Rt(n),i=Rt(t);return t!==i&&!e&&A(r,"has",t),!e&&A(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function nt(t,e=!1){return t=t["__v_raw"],!e&&A(Rt(t),"iterate",b),Reflect.get(t,"size",t)}function rt(t){t=Rt(t);const e=Rt(this),n=Q(e),r=n.has.call(e,t);return r||(e.add(t),C(e,"add",t,t)),this}function it(t,e){e=Rt(e);const n=Rt(this),{has:i,get:o}=Q(n);let s=i.call(n,t);s||(t=Rt(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?Object(r["i"])(e,a)&&C(n,"set",t,e,a):C(n,"add",t,e),this}function ot(t){const e=Rt(this),{has:n,get:r}=Q(e);let i=n.call(e,t);i||(t=Rt(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&C(e,"delete",t,void 0,o),s}function st(){const t=Rt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&C(t,"clear",void 0,void 0,n),r}function at(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=Rt(o),a=e?Z:t?Y:X;return!t&&A(s,"iterate",b),o.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ct(t,e,n){return function(...i){const o=this["__v_raw"],s=Rt(o),a=Object(r["s"])(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?Z:e?Y:X;return!e&&A(s,"iterate",u?O:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function lt(){const t={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!0)},n={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!1)},r={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ct(i,!1,!1),n[i]=ct(i,!0,!1),e[i]=ct(i,!1,!0),r[i]=ct(i,!0,!0)}),[t,n,e,r]}const[ht,ft,dt,pt]=lt();function vt(t,e){const n=e?t?pt:dt:t?ft:ht;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["j"])(n,i)&&i in e?n:e,i,o)}const gt={get:vt(!1,!1)},mt={get:vt(!1,!0)},yt={get:vt(!0,!1)};const bt=new WeakMap,Ot=new WeakMap,wt=new WeakMap,_t=new WeakMap;function Et(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Et(Object(r["N"])(t))}function It(t){return t&&t["__v_isReadonly"]?t:At(t,!1,q,gt,bt)}function Tt(t){return At(t,!1,J,mt,Ot)}function St(t){return At(t,!0,K,yt,wt)}function At(t,e,n,i,o){if(!Object(r["u"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=jt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function kt(t){return xt(t)?kt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function xt(t){return!(!t||!t["__v_isReadonly"])}function Ct(t){return kt(t)||xt(t)}function Rt(t){const e=t&&t["__v_raw"];return e?Rt(e):t}function Pt(t){return Object(r["g"])(t,"__v_skip",!0),t}function Nt(t){k()&&(t=Rt(t),t.dep||(t.dep=c()),x(t.dep))}function Lt(t,e){t=Rt(t),t.dep&&R(t.dep)}const Mt=t=>Object(r["u"])(t)?It(t):t;function Dt(t){return Boolean(t&&!0===t.__v_isRef)}function Ft(t){return Bt(t,!1)}function Ut(t){return Bt(t,!0)}class Vt{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Rt(t),this._value=e?t:Mt(t)}get value(){return Nt(this),this._value}set value(t){t=this._shallow?t:Rt(t),Object(r["i"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Mt(t),Lt(this,t))}}function Bt(t,e){return Dt(t)?t:new Vt(t,e)}function $t(t){return Dt(t)?t.value:t}const Ht={get:(t,e,n)=>$t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Dt(i)&&!Dt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function zt(t){return kt(t)?t:new Proxy(t,Ht)}class Gt{constructor(t,e){this._object=t,this._key=e,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(t){this._object[this._key]=t}}function Wt(t,e){const n=t[e];return Dt(n)?n:new Gt(t,e)}class qt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(t,()=>{this._dirty||(this._dirty=!0,Lt(this))}),this["__v_isReadonly"]=n}get value(){const t=Rt(this);return Nt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e){let n,i;Object(r["o"])(t)?(n=t,i=r["d"]):(n=t.get,i=t.set);const o=new qt(n,i,Object(r["o"])(t)||!t.set);return o}Promise.resolve();new Set;new Map;Object.create(null),Object.create(null);function Jt(t,e,...n){const i=t.vnode.props||r["b"];let o=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:s}=i[t]||r["b"];s?o=n.map(t=>t.trim()):e&&(o=n.map(r["M"]))}let c;let u=i[c=Object(r["L"])(e)]||i[c=Object(r["L"])(Object(r["e"])(e))];!u&&s&&(u=i[c=Object(r["L"])(Object(r["k"])(e))]),u&&ti(u,t,6,o);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,ti(l,t,6,o)}}function Xt(t,e,n=!1){const i=e.emitsCache,o=i.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!Object(r["o"])(t)){const i=t=>{const n=Xt(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return s||c?(Object(r["n"])(s)?s.forEach(t=>a[t]=null):Object(r["h"])(a,s),i.set(t,a),a):(i.set(t,null),null)}function Yt(t,e){return!(!t||!Object(r["v"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["j"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["j"])(t,Object(r["k"])(e))||Object(r["j"])(t,e))}let Zt=null,Qt=null;function te(t){const e=Zt;return Zt=t,Qt=t&&t.type.__scopeId||null,e}function ee(t){Qt=t}function ne(){Qt=null}function re(t,e=Zt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Zn(-1);const i=te(e),o=t(...n);return te(i),r._d&&Zn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ie(t){const{type:e,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:v,inheritAttrs:g}=t;let m;const y=te(t);try{let t;if(4&n.shapeFlag){const e=o||i;m=vr(h.call(e,e,f,s,p,d,v)),t=u}else{const n=e;0,m=vr(n.length>1?n(s,{attrs:u,slots:c,emit:l}):n(s,null)),t=e.props?u:oe(u)}let y=m;if(t&&!1!==g){const e=Object.keys(t),{shapeFlag:n}=y;e.length&&7&n&&(a&&e.some(r["t"])&&(t=se(t,a)),y=hr(y,t))}0,n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),m=y}catch(b){qn.length=0,ei(b,t,1),m=cr(Gn)}return te(y),m}const oe=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["v"])(n))&&((e||(e={}))[n]=t[n]);return e},se=(t,e)=>{const n={};for(const i in t)Object(r["t"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function ae(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||ce(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?ce(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!Yt(u,n))return!0}}return!1}function ce(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!Yt(n,o))return!0}return!1}function ue({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const le=t=>t.__isSuspense;function he(t,e){e&&e.pendingBranch?Object(r["n"])(t)?e.effects.push(...t):e.effects.push(t):Ei(t)}function fe(t,e){if(Tr){let n=Tr.provides;const r=Tr.parent&&Tr.parent.provides;r===n&&(n=Tr.provides=Object.create(r)),n[t]=e}else 0}function de(t,e,n=!1){const i=Tr||Zt;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&Object(r["o"])(e)?e.call(i.proxy):e}else 0}function pe(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De(()=>{t.isMounted=!0}),Ve(()=>{t.isUnmounting=!0}),t}const ve=[Function,Array],ge={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ve,onEnter:ve,onAfterEnter:ve,onEnterCancelled:ve,onBeforeLeave:ve,onLeave:ve,onAfterLeave:ve,onLeaveCancelled:ve,onBeforeAppear:ve,onAppear:ve,onAfterAppear:ve,onAppearCancelled:ve},setup(t,{slots:e}){const n=Sr(),r=pe();let i;return()=>{const o=e.default&&Ee(e.default(),!0);if(!o||!o.length)return;const s=Rt(t),{mode:a}=s;const c=o[0];if(r.isLeaving)return Oe(c);const u=we(c);if(!u)return Oe(c);const l=be(u,s,r,n);_e(u,l);const h=n.subTree,f=h&&we(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Gn&&(!rr(u,f)||d)){const t=be(f,s,r,n);if(_e(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},Oe(c);"in-out"===a&&u.type!==Gn&&(t.delayLeave=(t,e,n)=>{const i=ye(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},me=ge;function ye(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function be(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:v,onAppear:g,onAfterAppear:m,onAppearCancelled:y}=e,b=String(t.key),O=ye(n,t),w=(t,e)=>{t&&ti(t,r,9,e)},_={mode:o,persisted:s,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=v||a}e._leaveCb&&e._leaveCb(!0);const o=O[b];o&&rr(t,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[e])},enter(t){let e=c,r=u,o=l;if(!n.isMounted){if(!i)return;e=g||c,r=m||u,o=y||l}let s=!1;const a=t._enterCb=e=>{s||(s=!0,w(e?o:r,[t]),_.delayedLeave&&_.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();w(h,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),w(n?p:d,[e]),e._leaveCb=void 0,O[i]===t&&delete O[i])};O[i]=t,f?(f(e,s),f.length<=1&&s()):s()},clone(t){return be(t,e,n,r)}};return _}function Oe(t){if(Te(t))return t=hr(t),t.children=null,t}function we(t){return Te(t)?t.children?t.children[0]:void 0:t}function _e(t,e){6&t.shapeFlag&&t.component?_e(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ee(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const o=t[i];o.type===Hn?(128&o.patchFlag&&r++,n=n.concat(Ee(o.children,e))):(e||o.type!==Gn)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function je(t){return Object(r["o"])(t)?{setup:t,name:t.name}:t}const Ie=t=>!!t.type.__asyncLoader;const Te=t=>t.type.__isKeepAlive;RegExp,RegExp;function Se(t,e){return Object(r["n"])(t)?t.some(t=>Se(t,e)):Object(r["C"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function Ae(t,e){xe(t,"a",e)}function ke(t,e){xe(t,"da",e)}function xe(t,e,n=Tr){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(Ne(e,r,n),n){let t=n.parent;while(t&&t.parent)Te(t.parent.vnode)&&Ce(r,e,n,t),t=t.parent}}function Ce(t,e,n,i){const o=Ne(e,t,i,!0);Be(()=>{Object(r["J"])(i[e],o)},n)}function Re(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Pe(t){return 128&t.shapeFlag?t.ssContent:t}function Ne(t,e,n=Tr,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;I(),Ar(n);const i=ti(e,n,t,r);return kr(),S(),i});return r?i.unshift(o):i.push(o),o}}const Le=t=>(e,n=Tr)=>(!Pr||"sp"===t)&&Ne(t,e,n),Me=Le("bm"),De=Le("m"),Fe=Le("bu"),Ue=Le("u"),Ve=Le("bum"),Be=Le("um"),$e=Le("sp"),He=Le("rtg"),ze=Le("rtc");function Ge(t,e=Tr){Ne("ec",t,e)}let We=!0;function qe(t){const e=Ye(t),n=t.proxy,i=t.ctx;We=!1,e.beforeCreate&&Je(e.beforeCreate,t,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:g,deactivated:m,beforeDestroy:y,beforeUnmount:b,destroyed:O,unmounted:w,render:_,renderTracked:E,renderTriggered:j,errorCaptured:I,serverPrefetch:T,expose:S,inheritAttrs:A,components:k,directives:x,filters:C}=e,R=null;if(l&&Ke(l,i,R,t.appContext.config.unwrapInjectedRef),a)for(const N in a){const t=a[N];Object(r["o"])(t)&&(i[N]=t.bind(n))}if(o){0;const e=o.call(n,n);0,Object(r["u"])(e)&&(t.data=It(e))}if(We=!0,s)for(const N in s){const t=s[N],e=Object(r["o"])(t)?t.bind(n,n):Object(r["o"])(t.get)?t.get.bind(n,n):r["d"];0;const o=!Object(r["o"])(t)&&Object(r["o"])(t.set)?t.set.bind(n):r["d"],a=Kt({get:e,set:o});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Xe(c[r],i,n,r);if(u){const t=Object(r["o"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{fe(e,t[e])})}function P(t,e){Object(r["n"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&Je(h,t,"c"),P(Me,f),P(De,d),P(Fe,p),P(Ue,v),P(Ae,g),P(ke,m),P(Ge,I),P(ze,E),P(He,j),P(Ve,b),P(Be,w),P($e,T),Object(r["n"])(S))if(S.length){const e=t.exposed||(t.exposed={});S.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});_&&t.render===r["d"]&&(t.render=_),null!=A&&(t.inheritAttrs=A),k&&(t.components=k),x&&(t.directives=x)}function Ke(t,e,n=r["d"],i=!1){Object(r["n"])(t)&&(t=nn(t));for(const o in t){const n=t[o];let s;s=Object(r["u"])(n)?"default"in n?de(n.from||o,n.default,!0):de(n.from||o):de(n),Dt(s)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function Je(t,e,n){ti(Object(r["n"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xe(t,e,n,i){const o=i.includes(".")?Ri(n,i):()=>n[i];if(Object(r["C"])(t)){const n=e[t];Object(r["o"])(n)&&ki(o,n)}else if(Object(r["o"])(t))ki(o,t.bind(n));else if(Object(r["u"])(t))if(Object(r["n"])(t))t.forEach(t=>Xe(t,e,n,i));else{const i=Object(r["o"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["o"])(i)&&ki(o,i,t)}else 0}function Ye(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Ze(c,t,s,!0)),Ze(c,e,s)):c=e,o.set(e,c),c}function Ze(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Ze(t,o,n,!0),i&&i.forEach(e=>Ze(t,e,n,!0));for(const s in e)if(r&&"expose"===s);else{const r=Qe[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const Qe={data:tn,props:on,emits:on,methods:on,computed:on,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:on,directives:on,watch:sn,provide:tn,inject:en};function tn(t,e){return e?t?function(){return Object(r["h"])(Object(r["o"])(t)?t.call(this,this):t,Object(r["o"])(e)?e.call(this,this):e)}:e:t}function en(t,e){return on(nn(t),nn(e))}function nn(t){if(Object(r["n"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rn(t,e){return t?[...new Set([].concat(t,e))]:e}function on(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function sn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=rn(t[r],e[r]);return n}function an(t,e,n,i=!1){const o={},s={};Object(r["g"])(s,ir,1),t.propsDefaults=Object.create(null),un(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:Tt(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function cn(t,e,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=t,c=Rt(o),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;un(t,e,o,s)&&(l=!0);for(const s in c)e&&(Object(r["j"])(e,s)||(i=Object(r["k"])(s))!==s&&Object(r["j"])(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=ln(u,c,s,void 0,t,!0)):delete o[s]);if(s!==c)for(const t in s)e&&Object(r["j"])(e,t)||(delete s[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["j"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const e=Object(r["e"])(a);o[e]=ln(u,c,e,h,t,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&C(t,"set","$attrs")}function un(t,e,n,i){const[o,s]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["y"])(u))continue;const l=e[u];let h;o&&Object(r["j"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:Yt(t.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(s){const e=Rt(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=ln(o,e,c,i[c],t,!Object(r["j"])(i,c))}}return c}function ln(t,e,n,i,o,s){const a=t[n];if(null!=a){const t=Object(r["j"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["o"])(t)){const{propsDefaults:r}=o;n in r?i=r[n]:(Ar(o),i=r[n]=t.call(null,e),kr())}else i=t}a[0]&&(s&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["k"])(n)||(i=!0))}return i}function hn(t,e,n=!1){const i=e.propsCache,o=i.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!Object(r["o"])(t)){const i=t=>{u=!0;const[n,i]=hn(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!s&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["n"])(s))for(let h=0;h<s.length;h++){0;const t=Object(r["e"])(s[h]);fn(t)&&(a[t]=r["b"])}else if(s){0;for(const t in s){const e=Object(r["e"])(t);if(fn(e)){const n=s[t],i=a[e]=Object(r["n"])(n)||Object(r["o"])(n)?{type:n}:n;if(i){const t=vn(Boolean,i.type),n=vn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["j"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function fn(t){return"$"!==t[0]}function dn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function pn(t,e){return dn(t)===dn(e)}function vn(t,e){return Object(r["n"])(e)?e.findIndex(e=>pn(e,t)):Object(r["o"])(e)&&pn(e,t)?0:-1}const gn=t=>"_"===t[0]||"$stable"===t,mn=t=>Object(r["n"])(t)?t.map(vr):[vr(t)],yn=(t,e,n)=>{const r=re((...t)=>mn(e(...t)),n);return r._c=!1,r},bn=(t,e,n)=>{const i=t._ctx;for(const o in t){if(gn(o))continue;const n=t[o];if(Object(r["o"])(n))e[o]=yn(o,n,i);else if(null!=n){0;const t=mn(n);e[o]=()=>t}}},On=(t,e)=>{const n=mn(e);t.slots.default=()=>n},wn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Rt(e),Object(r["g"])(e,"_",n)):bn(e,t.slots={})}else t.slots={},e&&On(t,e);Object(r["g"])(t.slots,ir,1)},_n=(t,e,n)=>{const{vnode:i,slots:o}=t;let s=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?s=!1:(Object(r["h"])(o,e),n||1!==t||delete o._):(s=!e.$stable,bn(e,o)),a=e}else e&&(On(t,e),a={default:1});if(s)for(const r in o)gn(r)||r in a||delete o[r]};function En(t,e){const n=Zt;if(null===n)return t;const i=n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=r["b"]]=e[s];Object(r["o"])(t)&&(t={mounted:t,updated:t}),t.deep&&Pi(n),o.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function jn(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(I(),ti(c,n,8,[t.el,a,t,e]),S())}}function In(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tn=0;function Sn(t,e){return function(n,i=null){null==i||Object(r["u"])(i)||(i=null);const o=In(),s=new Set;let a=!1;const c=o.app={_uid:Tn++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Li,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&Object(r["o"])(t.install)?(s.add(t),t.install(c,...e)):Object(r["o"])(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(r,s,u){if(!a){const l=cr(n,i);return l.appContext=o,s&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c}};return c}}function An(){}const kn=he;function xn(t){return Cn(t)}function Cn(t,e){An();const{insert:n,remove:i,patchProp:o,createElement:s,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:d=r["d"],cloneNode:p,insertStaticContent:v}=t,g=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!rr(t,e)&&(r=q(t),$(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case zn:m(t,e,n,r);break;case Gn:y(t,e,n,r);break;case Wn:null==t&&b(e,n,r,s);break;case Hn:R(t,e,n,r,i,o,s,a,c);break;default:1&h?E(t,e,n,r,i,o,s,a,c):6&h?P(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,J)}null!=l&&i&&Rn(l,t&&t.ref,o,e||t,!e)},m=(t,e,r,i)=>{if(null==t)n(e.el=a(e.children),r,i);else{const n=e.el=t.el;e.children!==t.children&&u(n,e.children)}},y=(t,e,r,i)=>{null==t?n(e.el=c(e.children||""),r,i):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=v(t.children,e,n,r)},O=({el:t,anchor:e},r,i)=>{let o;while(t&&t!==e)o=f(t),n(t,r,i),t=o;n(e,r,i)},_=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=f(t),i(t),t=n;i(e)},E=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?j(e,n,r,i,o,s,a,c):k(t,e,i,o,s,a,c)},j=(t,e,i,a,c,u,h,f)=>{let d,v;const{type:g,props:m,shapeFlag:y,transition:b,patchFlag:O,dirs:w}=t;if(t.el&&void 0!==p&&-1===O)d=t.el=p(t.el);else{if(d=t.el=s(t.type,u,m&&m.is,m),8&y?l(d,t.children):16&y&&A(t.children,d,null,a,c,u&&"foreignObject"!==g,h,f),w&&jn(t,null,a,"created"),m){for(const e in m)"value"===e||Object(r["y"])(e)||o(d,e,null,m[e],u,t.children,a,c,W);"value"in m&&o(d,"value",null,m.value),(v=m.onVnodeBeforeMount)&&Pn(v,a,t)}T(d,t,t.scopeId,h,a)}w&&jn(t,null,a,"beforeMount");const _=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;_&&b.beforeEnter(d),n(d,e,i),((v=m&&m.onVnodeMounted)||_||w)&&kn(()=>{v&&Pn(v,a,t),_&&b.enter(d),w&&jn(t,null,a,"mounted")},c)},T=(t,e,n,r,i)=>{if(n&&d(t,n),r)for(let o=0;o<r.length;o++)d(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;T(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},A=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?gr(t[u]):vr(t[u]);g(null,c,e,n,r,i,o,s,a)}},k=(t,e,n,i,s,a,c)=>{const u=e.el=t.el;let{patchFlag:h,dynamicChildren:f,dirs:d}=e;h|=16&t.patchFlag;const p=t.props||r["b"],v=e.props||r["b"];let g;(g=v.onVnodeBeforeUpdate)&&Pn(g,n,e,t),d&&jn(e,t,n,"beforeUpdate");const m=s&&"foreignObject"!==e.type;if(f?x(t.dynamicChildren,f,u,n,i,m,a):c||F(t,e,u,null,n,i,m,a,!1),h>0){if(16&h)C(u,e,p,v,n,i,s);else if(2&h&&p.class!==v.class&&o(u,"class",null,v.class,s),4&h&&o(u,"style",p.style,v.style,s),8&h){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=v[a];l===c&&"value"!==a||o(u,a,c,l,s,t.children,n,i,W)}}1&h&&t.children!==e.children&&l(u,e.children)}else c||null!=f||C(u,e,p,v,n,i,s);((g=v.onVnodeUpdated)||d)&&kn(()=>{g&&Pn(g,n,e,t),d&&jn(e,t,n,"updated")},i)},x=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Hn||!rr(c,u)||70&c.shapeFlag)?h(c.el):n;g(c,u,l,null,r,i,o,s,!0)}},C=(t,e,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["y"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,s,a,W)}if(n!==r["b"])for(const u in n)Object(r["y"])(u)||u in i||o(t,u,n[u],null,c,e.children,s,a,W);"value"in i&&o(t,"value",n.value,i.value)}},R=(t,e,r,i,o,s,c,u,l)=>{const h=e.el=t?t.el:a(""),f=e.anchor=t?t.anchor:a("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:v}=e;v&&(u=u?u.concat(v):v),null==t?(n(h,r,i),n(f,r,i),A(e.children,r,f,o,s,c,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,r,o,s,c,u),(null!=e.key||o&&e===o.subTree)&&Nn(t,e,!0)):F(t,e,r,f,o,s,c,u,l)},P=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):N(e,n,r,i,o,s,c):L(t,e,c)},N=(t,e,n,r,i,o,s)=>{const a=t.component=Ir(t,r,i);if(Te(t)&&(a.ctx.renderer=J),Nr(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=cr(Gn);y(null,t,e,n)}}else M(a,t,e,n,i,o,s)},L=(t,e,n)=>{const r=e.component=t.component;if(ae(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void D(r,e,n);r.next=e,Oi(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,i,o,s,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:l,vnode:f}=t,d=n;0,u.allowRecurse=!1,n?(n.el=f.el,D(t,n,a)):n=f,i&&Object(r["m"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Pn(e,l,n,f),u.allowRecurse=!0;const p=ie(t);0;const v=t.subTree;t.subTree=p,g(v,p,h(v.el),q(v),t,o,s),n.el=p.el,null===d&&ue(t,p.el),c&&kn(c,o),(e=n.props&&n.props.onVnodeUpdated)&&kn(()=>Pn(e,l,n,f),o)}else{let a;const{el:c,props:l}=e,{bm:h,m:f,parent:d}=t,p=Ie(e);if(u.allowRecurse=!1,h&&Object(r["m"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&Pn(a,d,e),u.allowRecurse=!0,c&&Y){const n=()=>{t.subTree=ie(t),Y(c,t.subTree,t,o,null)};p?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=ie(t);0,g(null,r,n,i,t,o,s),e.el=r.el}if(f&&kn(f,o),!p&&(a=l&&l.onVnodeMounted)){const t=e;kn(()=>Pn(a,d,t),o)}256&e.shapeFlag&&t.a&&kn(t.a,o),t.isMounted=!0,e=n=i=null}},u=new w(c,()=>yi(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,u.allowRecurse=l.allowRecurse=!0,l()},D=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,cn(t,e.props,r,n),_n(t,e.children,n),I(),ji(void 0,t.update),S()},F=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,h=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void V(u,f,n,r,i,o,s,a,c);if(256&d)return void U(u,f,n,r,i,o,s,a,c)}8&p?(16&h&&W(u,i,o),f!==u&&l(n,f)):16&h?16&p?V(u,f,n,r,i,o,s,a,c):W(u,i,o,!0):(8&h&&l(n,""),16&p&&A(f,n,r,i,o,s,a,c))},U=(t,e,n,i,o,s,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?gr(e[d]):vr(e[d]);g(t[d],r,n,null,o,s,a,c,u)}l>h?W(t,o,s,!0,!1,f):A(e,n,i,o,s,a,c,u,f)},V=(t,e,n,i,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?gr(e[l]):vr(e[l]);if(!rr(r,i))break;g(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?gr(e[d]):vr(e[d]);if(!rr(r,i))break;g(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:i;while(l<=d)g(null,e[l]=u?gr(e[l]):vr(e[l]),n,r,o,s,a,c,u),l++}}else if(l>d)while(l<=f)$(t[l],o,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=d;l++){const t=e[l]=u?gr(e[l]):vr(e[l]);null!=t.key&&m.set(t.key,l)}let y,b=0;const O=d-v+1;let w=!1,_=0;const E=new Array(O);for(l=0;l<O;l++)E[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=O){$(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=v;y<=d;y++)if(0===E[y-v]&&rr(r,e[y])){i=y;break}void 0===i?$(r,o,s,!0):(E[i-v]=l+1,i>=_?_=i:w=!0,g(r,e[i],n,null,o,s,a,c,u),b++)}const j=w?Ln(E):r["a"];for(y=j.length-1,l=O-1;l>=0;l--){const t=v+l,r=e[t],f=t+1<h?e[t+1].el:i;0===E[l]?g(null,r,n,f,o,s,a,c,u):w&&(y<0||l!==j[y]?B(r,n,f,2):y--)}}},B=(t,e,r,i,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void B(t.component.subTree,e,r,i);if(128&l)return void t.suspense.move(e,r,i);if(64&l)return void a.move(t,e,r,J);if(a===Hn){n(s,e,r);for(let t=0;t<u.length;t++)B(u[t],e,r,i);return void n(t.anchor,e,r)}if(a===Wn)return void O(t,e,r);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(s),n(s,e,r),kn(()=>c.enter(s),o);else{const{leave:t,delayLeave:i,afterLeave:o}=c,a=()=>n(s,e,r),u=()=>{t(s,()=>{a(),o&&o()})};i?i(s,a,u):u()}else n(s,e,r)},$=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Rn(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Ie(t);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&Pn(v,e,t),6&l)G(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&jn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,J,r):u&&(o!==Hn||h>0&&64&h)?W(u,e,n,!1,!0):(o===Hn&&384&h||!i&&16&l)&&W(c,e,n),r&&H(t)}(p&&(v=s&&s.onVnodeUnmounted)||d)&&kn(()=>{v&&Pn(v,e,t),d&&jn(t,null,e,"unmounted")},n)},H=t=>{const{type:e,el:n,anchor:r,transition:o}=t;if(e===Hn)return void z(n,r);if(e===Wn)return void _(t);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&t.shapeFlag&&o&&!o.persisted){const{leave:e,delayLeave:r}=o,i=()=>e(n,s);r?r(t.el,s,i):i()}else s()},z=(t,e)=>{let n;while(t!==e)n=f(t),i(t),t=n;i(e)},G=(t,e,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=t;i&&Object(r["m"])(i),o.stop(),s&&(s.active=!1,$(a,t,e,n)),c&&kn(c,e),kn(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},W=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)$(t[s],e,n,r,i)},q=t=>6&t.shapeFlag?q(t.component.subTree):128&t.shapeFlag?t.suspense.next():f(t.anchor||t.el),K=(t,e,n)=>{null==t?e._vnode&&$(e._vnode,null,null,!0):g(e._vnode||null,t,e,null,null,null,n),Ii(),e._vnode=t},J={p:g,um:$,m:B,r:H,mt:N,mc:A,pc:F,pbc:x,n:q,o:t};let X,Y;return e&&([X,Y]=e(J)),{render:K,hydrate:X,createApp:Sn(K,X)}}function Rn(t,e,n,i,o=!1){if(Object(r["n"])(t))return void t.forEach((t,s)=>Rn(t,e&&(Object(r["n"])(e)?e[s]:e),n,i,o));if(Ie(i)&&!o)return;const s=4&i.shapeFlag?Vr(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["C"])(l)?(h[l]=null,Object(r["j"])(f,l)&&(f[l]=null)):Dt(l)&&(l.value=null)),Object(r["C"])(u)){const t=()=>{h[u]=a,Object(r["j"])(f,u)&&(f[u]=a)};a?(t.id=-1,kn(t,n)):t()}else if(Dt(u)){const t=()=>{u.value=a};a?(t.id=-1,kn(t,n)):t()}else Object(r["o"])(u)&&Qr(u,c,12,[a,h])}function Pn(t,e,n,r=null){ti(t,e,7,[n,r])}function Nn(t,e,n=!1){const i=t.children,o=e.children;if(Object(r["n"])(i)&&Object(r["n"])(o))for(let r=0;r<i.length;r++){const t=i[r];let e=o[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[r]=gr(o[r]),e.el=t.el),n||Nn(t,e))}}function Ln(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const Mn=t=>t.__isTeleport;const Dn="components";function Fn(t,e){return Bn(Dn,t,!0,e)||t}const Un=Symbol();function Vn(t){return Object(r["C"])(t)?Bn(Dn,t,!1)||t:t||Un}function Bn(t,e,n=!0,i=!1){const o=Zt||Tr;if(o){const n=o.type;if(t===Dn){const t=Hr(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const s=$n(o[t]||n[t],e)||$n(o.appContext[t],e);return!s&&i?n:s}}function $n(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Hn=Symbol(void 0),zn=Symbol(void 0),Gn=Symbol(void 0),Wn=Symbol(void 0),qn=[];let Kn=null;function Jn(t=!1){qn.push(Kn=t?null:[])}function Xn(){qn.pop(),Kn=qn[qn.length-1]||null}let Yn=1;function Zn(t){Yn+=t}function Qn(t){return t.dynamicChildren=Yn>0?Kn||r["a"]:null,Xn(),Yn>0&&Kn&&Kn.push(t),t}function tr(t,e,n,r,i,o){return Qn(ar(t,e,n,r,i,o,!0))}function er(t,e,n,r,i){return Qn(cr(t,e,n,r,i,!0))}function nr(t){return!!t&&!0===t.__v_isVNode}function rr(t,e){return t.type===e.type&&t.key===e.key}const ir="__vInternal",or=({key:t})=>null!=t?t:null,sr=({ref:t})=>null!=t?Object(r["C"])(t)||Dt(t)||Object(r["o"])(t)?{i:Zt,r:t}:t:null;function ar(t,e=null,n=null,i=0,o=null,s=(t===Hn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&or(e),ref:e&&sr(e),scopeId:Qt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(mr(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["C"])(n)?8:16),Yn>0&&!a&&Kn&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Kn.push(u),u}const cr=ur;function ur(t,e=null,n=null,i=0,o=null,s=!1){if(t&&t!==Un||(t=Gn),nr(t)){const r=hr(t,e,!0);return n&&mr(r,n),r}if(Gr(t)&&(t=t.__vccOpts),e){e=lr(e);let{class:t,style:n}=e;t&&!Object(r["C"])(t)&&(e.class=Object(r["H"])(t)),Object(r["u"])(n)&&(Ct(n)&&!Object(r["n"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["I"])(n))}const a=Object(r["C"])(t)?1:le(t)?128:Mn(t)?64:Object(r["u"])(t)?4:Object(r["o"])(t)?2:0;return ar(t,e,n,i,o,a,s,!0)}function lr(t){return t?Ct(t)||ir in t?Object(r["h"])({},t):t:null}function hr(t,e,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=t,c=e?yr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&or(c),ref:e&&e.ref?n&&o?Object(r["n"])(o)?o.concat(sr(e)):[o,sr(e)]:sr(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Hn?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor};return u}function fr(t=" ",e=0){return cr(zn,null,t,e)}function dr(t,e){const n=cr(Wn,null,t);return n.staticCount=e,n}function pr(t="",e=!1){return e?(Jn(),er(Gn,null,t)):cr(Gn,null,t)}function vr(t){return null==t||"boolean"===typeof t?cr(Gn):Object(r["n"])(t)?cr(Hn,null,t.slice()):"object"===typeof t?gr(t):cr(zn,null,String(t))}function gr(t){return null===t.el||t.memo?t:hr(t)}function mr(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["n"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),mr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||ir in e?3===r&&Zt&&(1===Zt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Zt}}else Object(r["o"])(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),64&i?(n=16,e=[fr(e)]):n=8);t.children=e,t.shapeFlag|=n}function yr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["H"])([e.class,i.class]));else if("style"===t)e.style=Object(r["I"])([e.style,i.style]);else if(Object(r["v"])(t)){const n=e[t],r=i[t];n!==r&&(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}function br(t,e,n,i){let o;const s=n&&n[i];if(Object(r["n"])(t)||Object(r["C"])(t)){o=new Array(t.length);for(let n=0,r=t.length;n<r;n++)o[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,s&&s[n])}else if(Object(r["u"])(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,s&&s[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}const Or=t=>t?xr(t)?Vr(t)||t.proxy:Or(t.parent):null,wr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>Ye(t),$forceUpdate:t=>()=>yi(t.update),$nextTick:t=>gi.bind(t.proxy),$watch:t=>Ci.bind(t)}),_r={get({_:t},e){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 0:return i[e];case 1:return o[e];case 3:return n[e];case 2:return s[e]}else{if(i!==r["b"]&&Object(r["j"])(i,e))return a[e]=0,i[e];if(o!==r["b"]&&Object(r["j"])(o,e))return a[e]=1,o[e];if((l=t.propsOptions[0])&&Object(r["j"])(l,e))return a[e]=2,s[e];if(n!==r["b"]&&Object(r["j"])(n,e))return a[e]=3,n[e];We&&(a[e]=4)}}const h=wr[e];let f,d;return h?("$attrs"===e&&A(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["j"])(n,e)?(a[e]=3,n[e]):(d=u.config.globalProperties,Object(r["j"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:i,setupState:o,ctx:s}=t;if(o!==r["b"]&&Object(r["j"])(o,e))o[e]=n;else if(i!==r["b"]&&Object(r["j"])(i,e))i[e]=n;else if(Object(r["j"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||t!==r["b"]&&Object(r["j"])(t,a)||e!==r["b"]&&Object(r["j"])(e,a)||(c=s[0])&&Object(r["j"])(c,a)||Object(r["j"])(i,a)||Object(r["j"])(wr,a)||Object(r["j"])(o.config.globalProperties,a)}};const Er=In();let jr=0;function Ir(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||Er,a={uid:jr++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hn(i,o),emitsOptions:Xt(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Jt.bind(null,a),t.ce&&t.ce(a),a}let Tr=null;const Sr=()=>Tr||Zt,Ar=t=>{Tr=t,t.scope.on()},kr=()=>{Tr&&Tr.scope.off(),Tr=null};function xr(t){return 4&t.vnode.shapeFlag}let Cr,Rr,Pr=!1;function Nr(t,e=!1){Pr=e;const{props:n,children:r}=t.vnode,i=xr(t);an(t,n,i,e),wn(t,r);const o=i?Lr(t,e):void 0;return Pr=!1,o}function Lr(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pt(new Proxy(t.ctx,_r));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?Ur(t):null;Ar(t),I();const o=Qr(i,t,0,[t.props,n]);if(S(),kr(),Object(r["x"])(o)){if(o.then(kr,kr),e)return o.then(n=>{Mr(t,n,e)}).catch(e=>{ei(e,t,0)});t.asyncDep=o}else Mr(t,o,e)}else Dr(t,e)}function Mr(t,e,n){Object(r["o"])(e)?t.render=e:Object(r["u"])(e)&&(t.setupState=zt(e)),Dr(t,n)}function Dr(t,e,n){const i=t.type;if(!t.render){if(Cr&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=Cr(e,c)}}t.render=i.render||r["d"],Rr&&Rr(t)}Ar(t),I(),qe(t),S(),kr()}function Fr(t){return new Proxy(t.attrs,{get(e,n){return A(t,"get","$attrs"),e[n]}})}function Ur(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Fr(t))},slots:t.slots,emit:t.emit,expose:e}}function Vr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zt(Pt(t.exposed)),{get(e,n){return n in e?e[n]:n in wr?wr[n](t):void 0}}))}const Br=/(?:^|[-_])(\w)/g,$r=t=>t.replace(Br,t=>t.toUpperCase()).replace(/[-_]/g,"");function Hr(t){return Object(r["o"])(t)&&t.displayName||t.name}function zr(t,e,n=!1){let r=Hr(e);if(!r&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(r=t[1])}if(!r&&t&&t.parent){const n=t=>{for(const n in t)if(t[n]===e)return n};r=n(t.components||t.parent.type.components)||n(t.appContext.components)}return r?$r(r):n?"App":"Anonymous"}function Gr(t){return Object(r["o"])(t)&&"__vccOpts"in t}const Wr=[];function qr(t,...e){I();const n=Wr.length?Wr[Wr.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=Kr();if(r)Qr(r,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:t})=>`at <${zr(n,t.type)}>`).join("\n"),i]);else{const n=["[Vue warn]: "+t,...e];i.length&&n.push("\n",...Jr(i)),console.warn(...n)}S()}function Kr(){let t=Wr[Wr.length-1];if(!t)return[];const e=[];while(t){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function Jr(t){const e=[];return t.forEach((t,n)=>{e.push(...0===n?[]:["\n"],...Xr(t))}),e}function Xr({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=!!t.component&&null==t.component.parent,i=" at <"+zr(t.component,t.type,r),o=">"+n;return t.props?[i,...Yr(t.props),o]:[i+o]}function Yr(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(n=>{e.push(...Zr(n,t[n]))}),n.length>3&&e.push(" ..."),e}function Zr(t,e,n){return Object(r["C"])(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?n?e:[`${t}=${e}`]:Dt(e)?(e=Zr(t,Rt(e.value),!0),n?e:[t+"=Ref<",e,">"]):Object(r["o"])(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Rt(e),n?e:[t+"=",e])}function Qr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){ei(o,e,n)}return i}function ti(t,e,n,i){if(Object(r["o"])(t)){const o=Qr(t,e,n,i);return o&&Object(r["x"])(o)&&o.catch(t=>{ei(t,e,n)}),o}const o=[];for(let r=0;r<t.length;r++)o.push(ti(t[r],e,n,i));return o}function ei(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const s=e.appContext.config.errorHandler;if(s)return void Qr(s,null,10,[t,i,o])}ni(t,n,i,r)}function ni(t,e,n,r=!0){console.error(t)}let ri=!1,ii=!1;const oi=[];let si=0;const ai=[];let ci=null,ui=0;const li=[];let hi=null,fi=0;const di=Promise.resolve();let pi=null,vi=null;function gi(t){const e=pi||di;return t?e.then(this?t.bind(this):t):e}function mi(t){let e=si+1,n=oi.length;while(e<n){const r=e+n>>>1,i=Ti(oi[r]);i<t?e=r+1:n=r}return e}function yi(t){oi.length&&oi.includes(t,ri&&t.allowRecurse?si+1:si)||t===vi||(null==t.id?oi.push(t):oi.splice(mi(t.id),0,t),bi())}function bi(){ri||ii||(ii=!0,pi=di.then(Si))}function Oi(t){const e=oi.indexOf(t);e>si&&oi.splice(e,1)}function wi(t,e,n,i){Object(r["n"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),bi()}function _i(t){wi(t,ci,ai,ui)}function Ei(t){wi(t,hi,li,fi)}function ji(t,e=null){if(ai.length){for(vi=e,ci=[...new Set(ai)],ai.length=0,ui=0;ui<ci.length;ui++)ci[ui]();ci=null,ui=0,vi=null,ji(t,e)}}function Ii(t){if(li.length){const t=[...new Set(li)];if(li.length=0,hi)return void hi.push(...t);for(hi=t,hi.sort((t,e)=>Ti(t)-Ti(e)),fi=0;fi<hi.length;fi++)hi[fi]();hi=null,fi=0}}const Ti=t=>null==t.id?1/0:t.id;function Si(t){ii=!1,ri=!0,ji(t),oi.sort((t,e)=>Ti(t)-Ti(e));try{for(si=0;si<oi.length;si++){const t=oi[si];t&&!1!==t.active&&Qr(t,null,14)}}finally{si=0,oi.length=0,Ii(t),ri=!1,pi=null,(oi.length||ai.length||li.length)&&Si(t)}}const Ai={};function ki(t,e,n){return xi(t,e,n)}function xi(t,e,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=Tr;let u,l,h=!1,f=!1;if(Dt(t)?(u=()=>t.value,h=!!t._shallow):kt(t)?(u=()=>t,i=!0):Object(r["n"])(t)?(f=!0,h=t.some(kt),u=()=>t.map(t=>Dt(t)?t.value:kt(t)?Pi(t):Object(r["o"])(t)?Qr(t,c,2):void 0)):u=Object(r["o"])(t)?e?()=>Qr(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),ti(t,c,3,[d])}:r["d"],e&&i){const t=u;u=()=>Pi(t())}let d=t=>{l=m.onStop=()=>{Qr(t,c,4)}},p=f?[]:Ai;const v=()=>{if(m.active)if(e){const t=m.run();(i||h||(f?t.some((t,e)=>Object(r["i"])(t,p[e])):Object(r["i"])(t,p)))&&(l&&l(),ti(e,c,3,[t,p===Ai?void 0:p,d]),p=t)}else m.run()};let g;v.allowRecurse=!!e,g="sync"===o?v:"post"===o?()=>kn(v,c&&c.suspense):()=>{!c||c.isMounted?_i(v):v()};const m=new w(u,g);return e?n?v():p=m.run():"post"===o?kn(m.run.bind(m),c&&c.suspense):m.run(),()=>{m.stop(),c&&c.scope&&Object(r["J"])(c.scope.effects,m)}}function Ci(t,e,n){const i=this.proxy,o=Object(r["C"])(t)?t.includes(".")?Ri(i,t):()=>i[t]:t.bind(i,i);let s;Object(r["o"])(e)?s=e:(s=e.handler,n=e);const a=Tr;Ar(this);const c=xi(o,s.bind(i),n);return a?Ar(a):kr(),c}function Ri(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Pi(t,e=new Set){if(!Object(r["u"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Dt(t))Pi(t.value,e);else if(Object(r["n"])(t))for(let n=0;n<t.length;n++)Pi(t[n],e);else if(Object(r["A"])(t)||Object(r["s"])(t))t.forEach(t=>{Pi(t,e)});else if(Object(r["w"])(t))for(const n in t)Pi(t[n],e);return t}function Ni(t,e,n){const i=arguments.length;return 2===i?Object(r["u"])(e)&&!Object(r["n"])(e)?nr(e)?cr(t,null,[e]):cr(t,e):cr(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&nr(n)&&(n=[n]),cr(t,e,n))}Symbol("");const Li="3.2.8",Mi="http://www.w3.org/2000/svg",Di="undefined"!==typeof document?document:null,Fi=new Map,Ui={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Di.createElementNS(Mi,t):Di.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let o=Fi.get(t);if(!o){const e=Di.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,o=e.content,r){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}Fi.set(t,o)}return e.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Vi(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Bi(t,e,n){const i=t.style;if(n)if(Object(r["C"])(n)){if(e!==n){const e=i.display;i.cssText=n,"_vod"in t&&(i.display=e)}}else{for(const t in n)Hi(i,t,n[t]);if(e&&!Object(r["C"])(e))for(const t in e)null==n[t]&&Hi(i,t,"")}else t.removeAttribute("style")}const $i=/\s*!important$/;function Hi(t,e,n){if(Object(r["n"])(n))n.forEach(n=>Hi(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=Wi(t,e);$i.test(n)?t.setProperty(Object(r["k"])(i),n.replace($i,""),"important"):t[i]=n}}const zi=["Webkit","Moz","ms"],Gi={};function Wi(t,e){const n=Gi[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return Gi[e]=i;i=Object(r["f"])(i);for(let r=0;r<zi.length;r++){const n=zi[r]+i;if(n in t)return Gi[e]=n}return e}const qi="http://www.w3.org/1999/xlink";function Ki(t,e,n,i,o){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(qi,e.slice(6,e.length)):t.setAttributeNS(qi,e,n);else{const i=Object(r["B"])(e);null==n||i&&!Object(r["l"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ji(t,e,n,i,o,s,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,o,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["l"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let Xi=Date.now,Yi=!1;if("undefined"!==typeof window){Xi()>document.createEvent("Event").timeStamp&&(Xi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Yi=!!(t&&Number(t[1])<=53)}let Zi=0;const Qi=Promise.resolve(),to=()=>{Zi=0},eo=()=>Zi||(Qi.then(to),Zi=Xi());function no(t,e,n,r){t.addEventListener(e,n,r)}function ro(t,e,n,r){t.removeEventListener(e,n,r)}function io(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=so(e);if(r){const s=o[e]=ao(r,i);no(t,n,s,a)}else s&&(ro(t,n,s,a),o[e]=void 0)}}const oo=/(?:Once|Passive|Capture)$/;function so(t){let e;if(oo.test(t)){let n;e={};while(n=t.match(oo))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["k"])(t.slice(2)),e]}function ao(t,e){const n=t=>{const r=t.timeStamp||Xi();(Yi||r>=n.attached-1)&&ti(co(t,n.value),e,5,[t])};return n.value=t,n.attached=eo(),n}function co(t,e){if(Object(r["n"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const uo=/^on[a-z]/,lo=(t,e,n,i,o=!1,s,a,c,u)=>{"class"===e?Vi(t,i,o):"style"===e?Bi(t,n,i):Object(r["v"])(e)?Object(r["t"])(e)||io(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):ho(t,e,i,o))?Ji(t,e,i,s,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),Ki(t,e,i,o))};function ho(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&uo.test(e)&&Object(r["o"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!uo.test(e)||!Object(r["C"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const fo="transition",po="animation",vo=(t,{slots:e})=>Ni(me,bo(t),e);vo.displayName="Transition";const go={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mo=(vo.props=Object(r["h"])({},me.props,go),(t,e=[])=>{Object(r["n"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),yo=t=>!!t&&(Object(r["n"])(t)?t.some(t=>t.length>1):t.length>1);function bo(t){const e={};for(const r in t)r in go||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,v=Oo(o),g=v&&v[0],m=v&&v[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:O,onLeave:w,onLeaveCancelled:_,onBeforeAppear:E=y,onAppear:j=b,onAppearCancelled:I=O}=e,T=(t,e,n)=>{Eo(t,e?h:c),Eo(t,e?l:a),n&&n()},S=(t,e)=>{Eo(t,p),Eo(t,d),e&&e()},A=t=>(e,n)=>{const r=t?j:b,o=()=>T(e,t,n);mo(r,[e,o]),jo(()=>{Eo(e,t?u:s),_o(e,t?h:c),yo(r)||To(e,i,g,o)})};return Object(r["h"])(e,{onBeforeEnter(t){mo(y,[t]),_o(t,s),_o(t,a)},onBeforeAppear(t){mo(E,[t]),_o(t,u),_o(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){const n=()=>S(t,e);_o(t,f),xo(),_o(t,d),jo(()=>{Eo(t,f),_o(t,p),yo(w)||To(t,i,m,n)}),mo(w,[t,n])},onEnterCancelled(t){T(t,!1),mo(O,[t])},onAppearCancelled(t){T(t,!0),mo(I,[t])},onLeaveCancelled(t){S(t),mo(_,[t])}})}function Oo(t){if(null==t)return null;if(Object(r["u"])(t))return[wo(t.enter),wo(t.leave)];{const e=wo(t);return[e,e]}}function wo(t){const e=Object(r["M"])(t);return e}function _o(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function Eo(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function jo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Io=0;function To(t,e,n,r){const i=t._endId=++Io,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=So(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function So(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(fo+"Delay"),o=r(fo+"Duration"),s=Ao(i,o),a=r(po+"Delay"),c=r(po+"Duration"),u=Ao(a,c);let l=null,h=0,f=0;e===fo?s>0&&(l=fo,h=s,f=o.length):e===po?u>0&&(l=po,h=u,f=c.length):(h=Math.max(s,u),l=h>0?s>u?fo:po:null,f=l?l===fo?o.length:c.length:0);const d=l===fo&&/\b(transform|all)(,|$)/.test(n[fo+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function Ao(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>ko(e)+ko(t[n])))}function ko(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function xo(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Co=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["n"])(e)?t=>Object(r["m"])(e,t):e};function Ro(t){t.target.composing=!0}function Po(t){const e=t.target;e.composing&&(e.composing=!1,No(e,"input"))}function No(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Lo={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t._assign=Co(o);const s=i||o.props&&"number"===o.props.type;no(t,e?"change":"input",e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():s&&(i=Object(r["M"])(i)),t._assign(i)}),n&&no(t,"change",()=>{t.value=t.value.trim()}),e||(no(t,"compositionstart",Ro),no(t,"compositionend",Po),no(t,"change",Po))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},s){if(t._assign=Co(s),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((o||"number"===t.type)&&Object(r["M"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const Mo=Object(r["h"])({patchProp:lo},Ui);let Do;function Fo(){return Do||(Do=xn(Mo))}const Uo=(...t)=>{const e=Fo().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=Vo(t);if(!i)return;const o=e._component;Object(r["o"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function Vo(t){if(Object(r["C"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7bb1":function(t,e,n){"use strict";n.d(e,"a",(function(){return Rt})),n.d(e,"b",(function(){return _t})),n.d(e,"c",(function(){return Ct})),n.d(e,"d",(function(){return rt})),n.d(e,"e",(function(){return l}));var r=n("7a23");
/**
  * vee-validate v4.4.10
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function i(t){return"function"===typeof t}function o(t){return null===t||void 0===t}const s=t=>null!==t&&!!t&&"object"===typeof t&&!Array.isArray(t);function a(t){return Number(t)>=0}function c(t){const e=parseFloat(t);return isNaN(e)?t:e}const u={};function l(t,e){f(t,e),u[t]=e}function h(t){return u[t]}function f(t,e){if(!i(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const d=Symbol("vee-validate-form"),p=Symbol("vee-validate-form-errors"),v=Symbol("vee-validate-form-initial-values"),g=Symbol("vee-validate-field-instance"),m=Symbol("Default empty value");function y(t){return i(t)&&!!t.__locatorRef}function b(t){return["input","textarea","select"].includes(t)}function O(t,e){return b(t)&&"file"===e.type}function w(t){return!!t&&i(t.validate)}function _(t){return"checkbox"===t||"radio"===t}function E(t){return s(t)||Array.isArray(t)}function j(t){return Array.isArray(t)?0===t.length:s(t)&&0===Object.keys(t).length}function I(t){return/^\[.+\]$/i.test(t)}function T(t){return S(t)&&t.multiple}function S(t){return"SELECT"===t.tagName}function A(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return"select"===t&&"multiple"in e&&n}function k(t,e){return A(t,e)||O(t,e)}function x(t){return C(t)&&t.target&&"submit"in t.target}function C(t){return!!t&&(!!("undefined"!==typeof Event&&i(Event)&&t instanceof Event)||!(!t||!t.srcElement))}function R(t,e){return e in t&&t[e]!==m}function P(t){return I(t)?t.replace(/\[|\]/gi,""):t}function N(t,e,n){if(!t)return n;if(I(e))return t[P(e)];const r=e.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((t,e)=>E(t)&&e in t?t[e]:n,t);return r}function L(t,e,n){if(I(e))return void(t[P(e)]=n);const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1)return void(i[r[s]]=n);r[s]in i&&!o(i[r[s]])||(i[r[s]]=a(r[s+1])?[]:{}),i=i[r[s]]}}function M(t,e){Array.isArray(t)&&a(e)?t.splice(Number(e),1):s(t)&&delete t[e]}function D(t,e){if(I(e))return void delete t[P(e)];const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){M(r,n[s]);break}if(!(n[s]in r)||o(r[n[s]]))break;r=r[n[s]]}const i=n.map((e,r)=>N(t,n.slice(0,r).join(".")));for(let o=i.length-1;o>=0;o--)j(i[o])&&(0!==o?M(i[o-1],n[o-1]):M(t,n[0]))}function F(t){return Object.keys(t)}function U(t,e){const n=Object(r["l"])();return(null===n||void 0===n?void 0:n.provides[t])||Object(r["n"])(t,e)}function V(t){return Array.isArray(t)?t[0]:t}function B(t,e,n=!1){Array.isArray(t)?n?e(t[0]):t.forEach(e):e(t)}function $(t,e,n){if(Array.isArray(t)){const n=[...t],r=n.indexOf(e);return r>=0?n.splice(r,1):n.push(e),n}return t===e?n:e}const H=(t,e,n)=>e.slots.default?"string"!==typeof t&&t?{default:()=>{var t,r;return null===(r=(t=e.slots).default)||void 0===r?void 0:r.call(t,n())}}:e.slots.default(n()):e.slots.default;function z(t){if(G(t))return t._value}function G(t){return"_value"in t}function W(t){if(!C(t))return t;const e=t.target;if(_(e.type)&&G(e))return z(e);if("file"===e.type&&e.files)return Array.from(e.files);if(T(e))return Array.from(e.options).filter(t=>t.selected&&!t.disabled).map(z);if(S(e)){const t=Array.from(e.options).find(t=>t.selected);return t?z(t):e.value}return e.value}function q(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?s(t)&&t._$$isNormalized?t:s(t)?Object.keys(t).reduce((e,n)=>{const r=K(t[n]);return!1!==t[n]&&(e[n]=J(r)),e},e):"string"!==typeof t?e:t.split("|").reduce((t,e)=>{const n=X(e);return n.name?(t[n.name]=J(n.params),t):t},e):e}function K(t){return!0===t?[]:Array.isArray(t)||s(t)?t:[t]}function J(t){const e=t=>"string"===typeof t&&"@"===t[0]?Y(t.slice(1)):t;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const X=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function Y(t){const e=e=>{const n=N(e,t)||e[t];return n};return e.__locatorRef=t,e}function Z(t){return Array.isArray(t)?t.filter(y):F(t).filter(e=>y(t[e])).map(e=>t[e])}const Q={generateMessage:({field:t})=>t+" is not valid.",bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let tt=Object.assign({},Q);const et=()=>tt,nt=t=>{tt=Object.assign(Object.assign({},tt),t)},rt=nt;async function it(t,e,n={}){const r=null===n||void 0===n?void 0:n.bails,i={name:(null===n||void 0===n?void 0:n.name)||"{field}",rules:e,bails:null===r||void 0===r||r,formData:(null===n||void 0===n?void 0:n.values)||{}},o=await ot(i,t),s=o.errors;return{errors:s,valid:!s.length}}async function ot(t,e){if(w(t.rules))return st(e,t.rules,{bails:t.bails});if(i(t.rules)){const n={field:t.name,form:t.formData,value:e},r=await t.rules(e,n),i="string"!==typeof r&&r,o="string"===typeof r?r:ct(n);return{errors:i?[]:[o]}}const n=Object.assign(Object.assign({},t),{rules:q(t.rules)}),r=[],o=Object.keys(n.rules),s=o.length;for(let i=0;i<s;i++){const s=o[i],a=await at(n,e,{name:s,params:n.rules[s]});if(a.error&&(r.push(a.error),t.bails))return{errors:r}}return{errors:r}}async function st(t,e,n){var r;const i=await e.validate(t,{abortEarly:null===(r=n.bails)||void 0===r||r}).then(()=>[]).catch(t=>{if("ValidationError"===t.name)return t.errors;throw t});return{errors:i}}async function at(t,e,n){const r=h(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=ut(n.params,t.formData),o={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},s=await r(e,i,o);return"string"===typeof s?{error:s}:{error:s?void 0:ct(o)}}function ct(t){const e=et().generateMessage;return e?e(t):"Field is invalid"}function ut(t,e){const n=t=>y(t)?t(e):t;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((e,r)=>(e[r]=n(t[r]),e),{})}async function lt(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(t=>{if("ValidationError"!==t.name)throw t;return t.inner||[]}),r={},i={};for(const o of n){const t=o.errors;r[o.path]={valid:!t.length,errors:t},t.length&&(i[o.path]=t[0])}return{valid:!n.length,results:r,errors:i}}async function ht(t,e,n){const r=F(t),i=r.map(async r=>{var i,o,s;const a=await it(N(e,r),t[r],{name:(null===(i=null===n||void 0===n?void 0:n.names)||void 0===i?void 0:i[r])||r,values:e,bails:null===(s=null===(o=null===n||void 0===n?void 0:n.bailsMap)||void 0===o?void 0:o[r])||void 0===s||s});return Object.assign(Object.assign({},a),{path:r})});let o=!0;const s=await Promise.all(i),a={},c={};for(const u of s)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(o=!1,c[u.path]=u.errors[0]);return{valid:o,results:a,errors:c}}function ft(t){if("object"!==typeof t)return t;var e,n,r=Object.prototype.toString.call(t);if("[object Object]"===r){if(t.constructor!==Object&&"function"===typeof t.constructor)for(e in n=new t.constructor,t)n.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=ft(t[e]));else for(e in n={},t)"__proto__"===e?Object.defineProperty(n,e,{value:ft(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=ft(t[e]);return n}if("[object Array]"===r){for(e=t.length,n=Array(e);e--;)n[e]=ft(t[e]);return n}return"[object Date]"===r?new Date(+t):"[object RegExp]"===r?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):t}var dt=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;0!==i--;)if(!t(e[i],n[i]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;for(i of e.entries())if(!t(i[1],n.get(i[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(r=e.length,r!=n.length)return!1;for(i=r;0!==i--;)if(e[i]!==n[i])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!==i--;){var s=o[i];if(!t(e[s],n[s]))return!1}return!0}return e!==e&&n!==n};let pt=0;function vt(t,e,n){const o=pt>=Number.MAX_SAFE_INTEGER?0:++pt,{initialValue:s,validateOnMount:a,bails:c,type:u,checkedValue:l,label:h,validateOnValueUpdate:f,uncheckedValue:p,standalone:v}=gt(Object(r["I"])(t),n),m=v?void 0:U(d),{meta:y,errors:b,errorMessage:O,handleBlur:_,handleInput:E,resetValidationState:j,setValidationState:I,setErrors:T,value:S,checked:A}=mt({name:t,initValue:s,form:m,type:u,checkedValue:l,standalone:v}),k=Object(r["b"])(()=>{let n=Object(r["I"])(e);const o=Object(r["I"])(null===m||void 0===m?void 0:m.schema);return o&&!w(o)&&(n=bt(o,Object(r["I"])(t))||n),w(n)||i(n)?n:q(n)});async function x(e){var n,i;return(null===m||void 0===m?void 0:m.validateSchema)?null!==(n=(await m.validateSchema(e)).results[Object(r["I"])(t)])&&void 0!==n?n:{valid:!0,errors:[]}:it(S.value,k.value,{name:Object(r["I"])(h)||Object(r["I"])(t),values:null!==(i=null===m||void 0===m?void 0:m.values)&&void 0!==i?i:{},bails:c})}async function C(){y.pending=!0,y.validated=!0;const t=await x("validated-only");return y.pending=!1,I(t)}async function R(){const t=await x("silent");y.valid=t.valid}const P=(t,e=!0)=>{var n,i;if(A&&A.value===(null===(i=null===(n=t)||void 0===n?void 0:n.target)||void 0===i?void 0:i.checked))return;let o=W(t);return A&&"checkbox"===u&&!m&&(o=$(S.value,Object(r["I"])(l),Object(r["I"])(p))),S.value=o,!f&&e?C():void 0};function L(t){y.touched=t}let M;function D(){M=Object(r["L"])(S,f?C:R,{deep:!0})}function F(t){null===M||void 0===M||M(),j(t),R(),Object(r["p"])(()=>{D()})}Object(r["u"])(()=>{if(a)return C();m&&m.validateSchema||R()}),D();const V={idx:-1,fid:o,name:t,label:h,value:S,meta:y,errors:b,errorMessage:O,type:u,checkedValue:l,uncheckedValue:p,checked:A,bails:c,resetField:F,handleReset:()=>F(),validate:C,handleChange:P,handleBlur:_,handleInput:E,setValidationState:I,setTouched:L,setErrors:T};if(Object(r["y"])(g,V),Object(r["o"])(e)&&"function"!==typeof Object(r["I"])(e)&&Object(r["L"])(e,(t,e)=>{if(!dt(t,e))return C()},{deep:!0}),!m)return V;m.register(V),Object(r["s"])(()=>{m.unregister(V)});const B=Object(r["b"])(()=>{const t=k.value;return!t||i(t)||w(t)?{}:Object.keys(t).reduce((e,n)=>{const r=Z(t[n]).map(t=>t.__locatorRef).reduce((t,e)=>{const n=N(m.values,e)||m.values[e];return void 0!==n&&(t[e]=n),t},{});return Object.assign(e,r),e},{})});return Object(r["L"])(B,(t,e)=>{if(!Object.keys(t).length)return;const n=!dt(t,e);n&&(y.dirty?C():R())}),V}function gt(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1});if(!e)return n();const r="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:r})}function mt({name:t,initValue:e,form:n,type:i,checkedValue:o,standalone:s}){const{errors:a,errorMessage:c,setErrors:u}=wt(t,n),l=s?void 0:U(v,void 0),h=Object(r["B"])(Object(r["I"])(e)),f=Object(r["b"])(()=>N(Object(r["I"])(l),Object(r["I"])(t),Object(r["I"])(h))),d=Ot(f,t,n),p=yt(f,d,a),g=_(i)?Object(r["b"])(()=>Array.isArray(d.value)?d.value.includes(Object(r["I"])(o)):Object(r["I"])(o)===d.value):void 0,m=()=>{p.touched=!0},y=t=>{_(i)||(d.value=W(t))};function b(t){return u(t.errors),t}function O(i){var o;const s=Object(r["I"])(t),a=i&&"value"in i?i.value:N(Object(r["I"])(l),s,Object(r["I"])(e));n?(n.setFieldValue(s,a,{force:!0}),n.setFieldInitialValue(s,a)):(d.value=ft(a),h.value=ft(a)),u((null===i||void 0===i?void 0:i.errors)||[]),p.touched=null!==(o=null===i||void 0===i?void 0:i.touched)&&void 0!==o&&o,p.pending=!1,p.validated=!1}return{meta:p,errors:a,errorMessage:c,setErrors:u,setValidationState:b,resetValidationState:O,handleBlur:m,handleInput:y,value:d,checked:g}}function yt(t,e,n){const i=Object(r["A"])({touched:!1,pending:!1,valid:!0,validated:!!Object(r["I"])(n).length,initialValue:Object(r["b"])(()=>Object(r["I"])(t)),dirty:Object(r["b"])(()=>!dt(Object(r["I"])(e),Object(r["I"])(t)))});return Object(r["L"])(n,t=>{i.valid=!t.length},{immediate:!0,flush:"sync"}),i}function bt(t,e){if(t)return t[e]}function Ot(t,e,n){if(!n)return Object(r["B"])(Object(r["I"])(t));const i=N(n.values,Object(r["I"])(e),Object(r["I"])(t));n.stageInitialValue(Object(r["I"])(e),void 0===i?Object(r["I"])(t):i);const o=Object(r["b"])({get(){return N(n.values,Object(r["I"])(e))},set(t){n.setFieldValue(Object(r["I"])(e),t)}});return o}function wt(t,e){if(!e){const t=Object(r["B"])([]);return{errors:Object(r["b"])(()=>t.value),errorMessage:Object(r["b"])(()=>t.value[0]),setErrors:e=>{t.value=Array.isArray(e)?e:[e]}}}const n=Object(r["b"])(()=>e.errorBag.value[Object(r["I"])(t)]||[]);return{errors:n,errorMessage:Object(r["b"])(()=>n.value[0]),setErrors:n=>{e.setFieldErrorBag(Object(r["I"])(t),n)}}}const _t=Object(r["k"])({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>et().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:m},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(t,e){const n=Object(r["H"])(t,"rules"),i=Object(r["H"])(t,"name"),o=Object(r["H"])(t,"label"),s=Object(r["H"])(t,"uncheckedValue"),a=R(t,"onUpdate:modelValue"),{errors:c,value:u,errorMessage:l,validate:h,handleChange:f,handleBlur:d,handleInput:p,setTouched:v,resetField:g,handleReset:y,meta:b,checked:O,setErrors:w}=vt(i,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:Tt(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:o,validateOnValueUpdate:!1}),E=a?function(t,n=!0){f(t,n),e.emit("update:modelValue",u.value)}:f,j=a?function(t){p(t),e.emit("update:modelValue",u.value)}:p,I=Object(r["b"])(()=>{const{validateOnInput:n,validateOnChange:r,validateOnBlur:i,validateOnModelUpdate:o}=jt(t),s=[d,e.attrs.onBlur,i?h:void 0].filter(Boolean),a=[t=>E(t,n),e.attrs.onInput].filter(Boolean),c=[t=>E(t,r),e.attrs.onChange].filter(Boolean),l={name:t.name,onBlur:s,onInput:a,onChange:c};o&&(l["onUpdate:modelValue"]=[E]),_(e.attrs.type)&&O?l.checked=O.value:l.value=u.value;const f=Et(t,e);return k(f,e.attrs)&&delete l.value,l}),T=Object(r["H"])(t,"modelValue");function S(){return{field:I.value,value:u.value,meta:b,errors:c.value,errorMessage:l.value,validate:h,resetField:g,handleChange:E,handleInput:j,handleReset:y,handleBlur:d,setTouched:v,setErrors:w}}return Object(r["L"])(T,e=>{e===m&&void 0===u.value||e!==It(u.value,t.modelModifiers)&&(u.value=e===m?void 0:e,h())}),()=>{const n=Object(r["E"])(Et(t,e)),i=H(n,e,S);return n?Object(r["m"])(n,Object.assign(Object.assign({},e.attrs),I.value),i):i}}});function Et(t,e){let n=t.as||"";return t.as||e.slots.default||(n="input"),n}function jt(t){var e,n,r,i;const{validateOnInput:o,validateOnChange:s,validateOnBlur:a,validateOnModelUpdate:c}=et();return{validateOnInput:null!==(e=t.validateOnInput)&&void 0!==e?e:o,validateOnChange:null!==(n=t.validateOnChange)&&void 0!==n?n:s,validateOnBlur:null!==(r=t.validateOnBlur)&&void 0!==r?r:a,validateOnModelUpdate:null!==(i=t.validateOnModelUpdate)&&void 0!==i?i:c}}function It(t,e){return e.number?c(t):t}function Tt(t,e){return _(e.attrs.type)?R(t,"modelValue")?t.modelValue:void 0:R(t,"modelValue")?t.modelValue:e.attrs.value}function St(t){const e=Object(r["B"])([]),n=Object(r["B"])(!1),i=Object(r["b"])(()=>e.value.reduce((t,e)=>{const n=Object(r["I"])(e.name);if(!t[n])return t[n]=e,e.idx=-1,t;const i=t[n];Array.isArray(i)||(i.idx=0,t[n]=[i]);const o=t[n];return e.idx=o.length,o.push(e),t},{})),o=Object(r["B"])(0),s=Object(r["A"])(ft(Object(r["I"])(null===t||void 0===t?void 0:t.initialValues)||{})),a={},{errorBag:c,setErrorBag:u,setFieldErrorBag:l}=xt(null===t||void 0===t?void 0:t.initialErrors),h=Object(r["b"])(()=>F(c.value).reduce((t,e)=>{const n=c.value[e];return n&&n.length&&(t[e]=n[0]),t},{})),f=Object(r["b"])(()=>F(i.value).reduce((t,e)=>{const n=V(i.value[e]);return n&&(t[e]=Object(r["I"])(n.label||n.name)||""),t},{})),v=Object(r["b"])(()=>F(i.value).reduce((t,e)=>{var n;const r=V(i.value[e]);return r&&(t[e]=null===(n=r.bails)||void 0===n||n),t},{})),g=Object.assign({},(null===t||void 0===t?void 0:t.initialErrors)||{}),{readonlyInitialValues:m,initialValues:y,setInitialValues:b}=kt(i,s,null===t||void 0===t?void 0:t.initialValues),O=At(e,s,m,h),_=null===t||void 0===t?void 0:t.validationSchema,E={fieldsById:i,values:s,errorBag:c,schema:_,submitCount:o,meta:O,isSubmitting:n,validateSchema:Object(r["I"])(_)?W:void 0,validate:M,register:R,unregister:P,setFieldErrorBag:l,validateField:U,setFieldValue:T,setValues:S,setErrors:I,setFieldError:j,setFieldTouched:A,setTouched:k,resetForm:C,handleSubmit:H,stageInitialValue:G,setFieldInitialValue:z};function j(t,e){l(t,e)}function I(t){u(t)}function T(t,e,{force:n}={force:!1}){var o;const c=i.value[t],u=ft(e);if(!c)return void L(s,t,u);if(Array.isArray(c)&&"checkbox"===(null===(o=c[0])||void 0===o?void 0:o.type)&&!Array.isArray(e)){const n=ft($(N(s,t)||[],e,void 0));return L(s,t,n),void c.forEach(t=>{a[t.fid]=n})}let l=e;Array.isArray(c)||"checkbox"!==(null===c||void 0===c?void 0:c.type)||n||(l=ft($(N(s,t),e,Object(r["I"])(c.uncheckedValue)))),L(s,t,l),c&&Array.isArray(c)?c.forEach(t=>{a[t.fid]=l}):a[c.fid]=l}function S(t){F(s).forEach(t=>{delete s[t]}),F(t).forEach(e=>{T(e,t[e])})}function A(t,e){const n=i.value[t];n&&B(n,t=>t.setTouched(e))}function k(t){F(t).forEach(e=>{A(e,!!t[e])})}function C(t){(null===t||void 0===t?void 0:t.values)?(b(t.values),S(null===t||void 0===t?void 0:t.values)):S(y.value),e.value.forEach(t=>t.resetField()),(null===t||void 0===t?void 0:t.touched)&&k(t.touched),I((null===t||void 0===t?void 0:t.errors)||{}),o.value=(null===t||void 0===t?void 0:t.submitCount)||0}function R(t){e.value.push(t),i.value,Object(r["o"])(t.name)&&(a[t.fid]=t.value.value,Object(r["L"])(t.name,(n,i)=>{T(n,a[t.fid]);const o=e.value.find(t=>Object(r["I"])(t.name)===i);o||(D(s,i),D(y.value,i))},{flush:"post"}));const n=Object(r["I"])(t.name),o=Object(r["I"])(t.errorMessage);o&&(null===g||void 0===g?void 0:g[n])!==o&&U(n),delete g[n]}function P(t){var n,o;const c=e.value.indexOf(t);if(-1===c)return;e.value.splice(c,1);const u=t.fid;Object(r["p"])(()=>{delete a[u],i.value[l]||j(l,void 0)});const l=Object(r["I"])(t.name);if(-1===t.idx){const t=e.value.find(t=>Object(r["I"])(t.name)===l);if(t)return;return D(s,l),void D(y.value,l)}const h=null===(o=null===(n=N(s,l))||void 0===n?void 0:n.indexOf)||void 0===o?void 0:o.call(n,Object(r["I"])(t.checkedValue));void 0!==h?-1!==h&&(Array.isArray(s[l])?D(s,`${l}.${h}`):(D(s,l),D(y.value,l))):D(s,l)}async function M(){if(E.validateSchema)return E.validateSchema("force");const t=await Promise.all(e.value.map(t=>t.validate().then(e=>({key:Object(r["I"])(t.name),valid:e.valid,errors:e.errors})))),n={},i={};for(const e of t)n[e.key]={valid:e.valid,errors:e.errors},e.errors.length&&(i[e.key]=e.errors[0]);return{valid:t.every(t=>t.valid),results:n,errors:i}}function U(t){const e=i.value[t];return e?Array.isArray(e)?e.map(t=>t.validate())[0]:e.validate():(Object(r["K"])(`field with name ${t} was not found`),Promise.resolve({errors:[],valid:!0}))}function H(t){return function(e){return e instanceof Event&&(e.preventDefault(),e.stopPropagation()),k(F(i.value).reduce((t,e)=>(t[e]=!0,t),{})),n.value=!0,o.value++,M().then(n=>{if(n.valid&&"function"===typeof t)return t(ft(s),{evt:e,setErrors:I,setFieldError:j,setTouched:k,setFieldTouched:A,setValues:S,setFieldValue:T,resetForm:C})}).then(()=>{n.value=!1},t=>{throw n.value=!1,t})}}function z(t,e){L(y.value,t,ft(e))}function G(t,e){L(s,t,e),z(t,e)}async function W(t){const e=Object(r["I"])(_);if(!e)return{valid:!0,results:{},errors:{}};const n=w(e)?await lt(e,s):await ht(e,s,{names:f.value,bailsMap:v.value}),i=E.fieldsById.value||{},o=F(E.errorBag.value),a=[...new Set([...F(n.results),...F(i),...o])];return a.reduce((e,r)=>{const o=i[r],s=(n.results[r]||{errors:[]}).errors,a={errors:s,valid:!s.length};if(e.results[r]=a,a.valid||(e.errors[r]=a.errors[0]),!o)return j(r,s),e;if(B(o,t=>t.meta.valid=a.valid),"silent"===t)return e;const c=Array.isArray(o)?o.some(t=>t.meta.validated):o.meta.validated;return"validated-only"!==t||c?(B(o,t=>t.setValidationState(a),!0),e):e},{valid:n.valid,results:{},errors:{}})}const q=H((t,{evt:e})=>{x(e)&&e.target.submit()});return Object(r["u"])(()=>{(null===t||void 0===t?void 0:t.initialErrors)&&I(t.initialErrors),(null===t||void 0===t?void 0:t.initialTouched)&&k(t.initialTouched),(null===t||void 0===t?void 0:t.validateOnMount)?M():E.validateSchema&&E.validateSchema("silent")}),Object(r["o"])(_)&&Object(r["L"])(_,()=>{var t;null===(t=E.validateSchema)||void 0===t||t.call(E,"validated-only")}),Object(r["y"])(d,E),Object(r["y"])(p,h),{errors:h,meta:O,values:s,isSubmitting:n,submitCount:o,validate:M,validateField:U,handleReset:()=>C(),resetForm:C,handleSubmit:H,submitForm:q,setFieldError:j,setErrors:I,setFieldValue:T,setValues:S,setFieldTouched:A,setTouched:k}}function At(t,e,n,i){const o={touched:"some",pending:"some",valid:"every"},s=Object(r["b"])(()=>!dt(e,Object(r["I"])(n))),a=Object(r["b"])(()=>F(o).reduce((e,n)=>{const r=o[n];return e[n]=t.value[r](t=>t.meta[n]),e},{}));return Object(r["b"])(()=>Object.assign(Object.assign({initialValues:Object(r["I"])(n)},a.value),{valid:a.value.valid&&!F(i.value).length,dirty:s.value}))}function kt(t,e,n){const i=Object(r["B"])(Object(r["I"])(n)||{}),o=Object(r["b"])(()=>i.value);function s(n,r=!1){if(i.value=ft(n),!r)return;const o=t=>t.meta.touched;F(t.value).forEach(n=>{const r=t.value[n],s=Array.isArray(r)?r.some(o):o(r);if(s)return;const a=N(i.value,n);L(e,n,a)})}return Object(r["o"])(n)&&Object(r["L"])(n,t=>{s(t,!0)},{deep:!0}),Object(r["y"])(v,o),{readonlyInitialValues:o,initialValues:i,setInitialValues:s}}function xt(t){const e=Object(r["B"])({});function n(t){return Array.isArray(t)?t:t?[t]:[]}function i(t,r){r?e.value[t]=n(r):delete e.value[t]}function o(t){e.value=F(t).reduce((e,r)=>{const i=t[r];return i&&(e[r]=n(i)),e},{})}return t&&o(t),{errorBag:e,setErrorBag:o,setFieldErrorBag:i}}const Ct=Object(r["k"])({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0}},setup(t,e){const n=Object(r["H"])(t,"initialValues"),i=Object(r["H"])(t,"validationSchema"),{errors:o,values:s,meta:a,isSubmitting:c,submitCount:u,validate:l,validateField:h,handleReset:f,resetForm:d,handleSubmit:p,submitForm:v,setErrors:g,setFieldError:m,setFieldValue:y,setValues:b,setFieldTouched:O,setTouched:w}=St({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount}),_=t.onSubmit?p(t.onSubmit):v;function E(t){C(t)&&t.preventDefault(),f(),"function"===typeof e.attrs.onReset&&e.attrs.onReset()}function j(t,e){const n="function"!==typeof t||e?e:t;return p(n)(t)}function I(){return{meta:a.value,errors:o.value,values:s,isSubmitting:c.value,submitCount:u.value,validate:l,validateField:h,handleSubmit:j,handleReset:f,submitForm:v,setErrors:g,setFieldError:m,setFieldValue:y,setValues:b,setFieldTouched:O,setTouched:w,resetForm:d}}return e.expose({setFieldError:m,setErrors:g,setFieldValue:y,setValues:b,setFieldTouched:O,setTouched:w,resetForm:d,validate:l,validateField:h}),function(){const n="form"===t.as?t.as:Object(r["E"])(t.as),i=H(n,e,I);if(!t.as)return i;const o="form"===t.as?{novalidate:!0}:{};return Object(r["m"])(n,Object.assign(Object.assign(Object.assign({},o),e.attrs),{onSubmit:_,onReset:E}),i)}}}),Rt=Object(r["k"])({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Object(r["n"])(p,void 0),i=Object(r["b"])(()=>null===n||void 0===n?void 0:n.value[t.name]);function o(){return{message:i.value}}return()=>{if(!i.value)return;const n=t.as?Object(r["E"])(t.as):t.as,s=H(n,e,o),a=Object.assign({role:"alert"},e.attrs);return n||!Array.isArray(s)&&s||!(null===s||void 0===s?void 0:s.length)?!Array.isArray(s)&&s||(null===s||void 0===s?void 0:s.length)?Object(r["m"])(n,a,s):Object(r["m"])(n||"span",a,i.value):s}}})},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",v=l("IE_PROTO"),g=function(){},m=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},O=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}O="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=s.length;while(t--)delete O[d][s[t]];return O()};a[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[d]=i(t),n=new g,g[d]=null,n[v]=t):n=O(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("9ed3"),o=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),h=n("c430"),f=n("3f8c"),d=n("ae93"),p=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,g=l("iterator"),m="keys",y="values",b="entries",O=function(){return this};t.exports=function(t,e,n,l,d,w,_){i(n,e,l);var E,j,I,T=function(t){if(t===d&&C)return C;if(!v&&t in k)return k[t];switch(t){case m:return function(){return new n(this,t)};case y:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this)}},S=e+" Iterator",A=!1,k=t.prototype,x=k[g]||k["@@iterator"]||d&&k[d],C=!v&&x||T(d),R="Array"==e&&k.entries||x;if(R&&(E=o(R.call(new t)),p!==Object.prototype&&E.next&&(h||o(E)===p||(s?s(E,p):"function"!=typeof E[g]&&c(E,g,O)),a(E,S,!0,!0),h&&(f[S]=O))),d==y&&x&&x.name!==y&&(A=!0,C=function(){return x.call(this)}),h&&!_||k[g]===C||c(k,g,C),f[e]=C,d)if(j={values:T(y),keys:w?C:T(m),entries:T(b)},_)for(I in j)(v||A||!(I in k))&&u(k,I,j[I]);else r({target:e,proto:!0,forced:v||A},j);return j}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"857a":function(t,e,n){var r=n("1d80"),i=n("577e"),o=/"/g;t.exports=function(t,e,n,s){var a=i(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+i(s).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("577e"),i=n("ad6d"),o=n("9f7f"),s=n("5692"),a=n("7c73"),c=n("69f3").get,u=n("fce3"),l=n("107c"),h=RegExp.prototype.exec,f=s("native-string-replace",String.prototype.replace),d=h,p=function(){var t=/a/,e=/b*/g;return h.call(t,"a"),h.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=o.UNSUPPORTED_Y||o.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],m=p||g||v||u||l;m&&(d=function(t){var e,n,o,s,u,l,m,y=this,b=c(y),O=r(t),w=b.raw;if(w)return w.lastIndex=y.lastIndex,e=d.call(w,O),y.lastIndex=w.lastIndex,e;var _=b.groups,E=v&&y.sticky,j=i.call(y),I=y.source,T=0,S=O;if(E&&(j=j.replace("y",""),-1===j.indexOf("g")&&(j+="g"),S=O.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==O.charAt(y.lastIndex-1))&&(I="(?: "+I+")",S=" "+S,T++),n=new RegExp("^(?:"+I+")",j)),g&&(n=new RegExp("^"+I+"$(?!\\s)",j)),p&&(o=y.lastIndex),s=h.call(E?n:y,S),E?s?(s.input=s.input.slice(T),s[0]=s[0].slice(T),s.index=y.lastIndex,y.lastIndex+=s[0].length):y.lastIndex=0:p&&s&&(y.lastIndex=y.global?s.index+s[0].length:o),g&&s&&s.length>1&&f.call(s[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s&&_)for(s.groups=l=a(null),u=0;u<_.length;u++)m=_[u],l[m[0]]=s[m[1]];return s}),t.exports=d},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,o=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),s=new k(r||[]);return o._invoke=I(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,o,(function(){return this}));var O=Object.getPrototypeOf,w=O&&O(O(x([])));w&&w!==n&&r.call(w,o)&&(b=w);var _=y.prototype=g.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function I(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return C()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=T(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function x(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:C}}function C(){return{value:e,done:!0}}return m.prototype=y,c(_,"constructor",y),c(y,"constructor",m),m.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(j.prototype),c(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new j(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},E(_),c(_,a,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9911:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},"9a1f":function(t,e,n){var r=n("825a"),i=n("35a1");t.exports=function(t,e){var n=arguments.length<2?i(t):e;if("function"!=typeof n)throw TypeError(String(t)+" is not iterable");return r(n.call(t))}},"9ab4":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return h}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function a(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function c(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function u(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function h(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){i(t,"throw",s)}}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return T})),n.d(e,"d",(function(){return I})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return tt})),n.d(e,"g",(function(){return it})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return nt})),n.d(e,"j",(function(){return P})),n.d(e,"k",(function(){return Q})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return rt})),n.d(e,"n",(function(){return N})),n.d(e,"o",(function(){return F})),n.d(e,"p",(function(){return o})),n.d(e,"q",(function(){return g})),n.d(e,"r",(function(){return q})),n.d(e,"s",(function(){return L})),n.d(e,"t",(function(){return k})),n.d(e,"u",(function(){return B})),n.d(e,"v",(function(){return A})),n.d(e,"w",(function(){return W})),n.d(e,"x",(function(){return $})),n.d(e,"y",(function(){return K})),n.d(e,"z",(function(){return m})),n.d(e,"A",(function(){return M})),n.d(e,"B",(function(){return a})),n.d(e,"C",(function(){return U})),n.d(e,"D",(function(){return V})),n.d(e,"E",(function(){return b})),n.d(e,"F",(function(){return O})),n.d(e,"G",(function(){return r})),n.d(e,"H",(function(){return d})),n.d(e,"I",(function(){return u})),n.d(e,"J",(function(){return C})),n.d(e,"K",(function(){return w})),n.d(e,"L",(function(){return et})),n.d(e,"M",(function(){return ot})),n.d(e,"N",(function(){return G}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(t){return!!t||""===t}function u(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=U(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return U(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(U(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",v="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),m=r(v);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=D(t),r=D(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=N(t),r=N(e),n||r)return!(!n||!r)&&y(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function O(t,e){return t.findIndex(t=>b(t,e))}const w=t=>null==t?"":N(t)||B(t)&&(t.toString===H||!F(t.toString))?JSON.stringify(t,_,2):String(t),_=(t,e)=>e&&e.__v_isRef?_(t,e.value):L(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:M(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||N(e)||W(e)?e:String(e),E={},j=[],I=()=>{},T=()=>!1,S=/^on[^a-z]/,A=t=>S.test(t),k=t=>t.startsWith("onUpdate:"),x=Object.assign,C=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R=Object.prototype.hasOwnProperty,P=(t,e)=>R.call(t,e),N=Array.isArray,L=t=>"[object Map]"===z(t),M=t=>"[object Set]"===z(t),D=t=>t instanceof Date,F=t=>"function"===typeof t,U=t=>"string"===typeof t,V=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,$=t=>B(t)&&F(t.then)&&F(t.catch),H=Object.prototype.toString,z=t=>H.call(t),G=t=>z(t).slice(8,-1),W=t=>"[object Object]"===z(t),q=t=>U(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,K=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},X=/-(\w)/g,Y=J(t=>t.replace(X,(t,e)=>e?e.toUpperCase():"")),Z=/\B([A-Z])/g,Q=J(t=>t.replace(Z,"-$1").toLowerCase()),tt=J(t=>t.charAt(0).toUpperCase()+t.slice(1)),et=J(t=>t?"on"+tt(t):""),nt=(t,e)=>!Object.is(t,e),rt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ot=t=>{const e=parseFloat(t);return isNaN(e)?t:e}}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("5135"),h=n("e8b5"),f=n("861d"),d=n("d9b5"),p=n("825a"),v=n("7b0b"),g=n("fc6a"),m=n("a04b"),y=n("577e"),b=n("5c6c"),O=n("7c73"),w=n("df75"),_=n("241c"),E=n("057f"),j=n("7418"),I=n("06cf"),T=n("9bf2"),S=n("d1e7"),A=n("9112"),k=n("6eeb"),x=n("5692"),C=n("f772"),R=n("d012"),P=n("90e3"),N=n("b622"),L=n("e538"),M=n("746f"),D=n("d44e"),F=n("69f3"),U=n("b727").forEach,V=C("hidden"),B="Symbol",$="prototype",H=N("toPrimitive"),z=F.set,G=F.getterFor(B),W=Object[$],q=i.Symbol,K=o("JSON","stringify"),J=I.f,X=T.f,Y=E.f,Z=S.f,Q=x("symbols"),tt=x("op-symbols"),et=x("string-to-symbol-registry"),nt=x("symbol-to-string-registry"),rt=x("wks"),it=i.QObject,ot=!it||!it[$]||!it[$].findChild,st=a&&u((function(){return 7!=O(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(W,e);r&&delete W[e],X(t,e,n),r&&t!==W&&X(W,e,r)}:X,at=function(t,e){var n=Q[t]=O(q[$]);return z(n,{type:B,tag:t,description:e}),a||(n.description=e),n},ct=function(t,e,n){t===W&&ct(tt,e,n),p(t);var r=m(e);return p(n),l(Q,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=O(n,{enumerable:b(0,!1)})):(l(t,V)||X(t,V,b(1,{})),t[V][r]=!0),st(t,r,n)):X(t,r,n)},ut=function(t,e){p(t);var n=g(e),r=w(n).concat(pt(n));return U(r,(function(e){a&&!ht.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?O(t):ut(O(t),e)},ht=function(t){var e=m(t),n=Z.call(this,e);return!(this===W&&l(Q,e)&&!l(tt,e))&&(!(n||!l(this,e)||!l(Q,e)||l(this,V)&&this[V][e])||n)},ft=function(t,e){var n=g(t),r=m(e);if(n!==W||!l(Q,r)||l(tt,r)){var i=J(n,r);return!i||!l(Q,r)||l(n,V)&&n[V][r]||(i.enumerable=!0),i}},dt=function(t){var e=Y(g(t)),n=[];return U(e,(function(t){l(Q,t)||l(R,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=Y(e?tt:g(t)),r=[];return U(n,(function(t){!l(Q,t)||e&&!l(W,t)||r.push(Q[t])})),r};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=P(t),n=function(t){this===W&&n.call(tt,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),st(this,e,b(1,t))};return a&&ot&&st(W,e,{configurable:!0,set:n}),at(e,t)},k(q[$],"toString",(function(){return G(this).tag})),k(q,"withoutSetter",(function(t){return at(P(t),t)})),S.f=ht,T.f=ct,I.f=ft,_.f=E.f=dt,j.f=pt,L.f=function(t){return at(N(t),t)},a&&(X(q[$],"description",{configurable:!0,get:function(){return G(this).description}}),s||k(W,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),U(w(rt),(function(t){M(t)})),r({target:B,stat:!0,forced:!c},{for:function(t){var e=y(t);if(l(et,e))return et[e];var n=q(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!d(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),K){var vt=!c||u((function(){var t=q();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(f(e)||void 0!==t)&&!d(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!d(e))return e}),i[1]=e,K.apply(null,i)}})}q[$][H]||A(q[$],H,q[$].valueOf),D(q,B),R[V]=!0},a5d8:function(t,e,n){},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),h=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(t){var e=c(this,a("Promise")),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!i&&"function"==typeof o){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&l(o.prototype,"finally",f,{unsafe:!0})}},a8e9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return R})),n.d(e,"g",(function(){return S})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return M})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return T})),n.d(e,"n",(function(){return y})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return O})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return k})),n.d(e,"t",(function(){return x}));var r=n("9ab4"),i=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},o=function(t){var e=[],n=0,r=0;while(n<t.length){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=t[n++];var s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=o>>2,h=(3&o)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;c||(d=64,s||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;var c=i<t.length,u=c?n[t.charAt(i)]:64;++i;var l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==h)throw Error();var f=o<<2|a>>4;if(r.push(f),64!==u){var d=a<<4&240|u>>2;if(r.push(d),64!==h){var p=u<<6&192|h;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){var e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var l=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"===typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(r["a"])({iss:"https://securetoken.google.com/"+i,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[c(JSON.stringify(n)),c(JSON.stringify(a)),u].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function p(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function v(){var t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return f().indexOf("Electron/")>=0}function y(){var t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b(){return f().indexOf("MSAppHost/")>=0}function O(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w="FirebaseError",_=function(t){function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=w,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,E.prototype.create),o}return Object(r["c"])(e,t),e}(Error),E=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,o=this.errors[t],s=o?j(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new _(i,a,r);return c},t}();function j(t,e){return t.replace(I,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function S(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=t[s],c=e[s];if(A(a)&&A(c)){if(!S(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){s=l[u];if(!n.includes(s))return!1}return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return e.length?"&"+e.join("&"):""}function x(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function C(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"===typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),s=1518500249):(o=c^u^l,s=1859775393):r<60?(o=c&u|l&(c|u),s=2400959708):(o=c^u^l,s=3395469782);i=(a<<5|a>>>27)+o+h+s+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);var n=e-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}})();function R(t,e){var n=new P(t,e);return n.subscribe.bind(n)}var P=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=N(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),o},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function N(t,e){if("object"!==typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"===typeof t[i])return!0}return!1}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))}).call(this,n("c8ba"))},abfd:function(t,e,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d}));var o,s=[];(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));var a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},c=o.INFO,u=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var o=(new Date).toISOString(),s=u[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,r(["["+o+"]  "+t.name+":"],n))}},h=function(){function t(t){this.name=t,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,s.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in o))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"===typeof t?a[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],t)),this._logHandler.apply(this,r([this,o.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],t)),this._logHandler.apply(this,r([this,o.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],t)),this._logHandler.apply(this,r([this,o.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],t)),this._logHandler.apply(this,r([this,o.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],t)),this._logHandler.apply(this,r([this,o.ERROR],t))},t}();function f(t){s.forEach((function(e){e.setLogLevel(t)}))}function d(t,e){for(var n=function(n){var r=null;e&&e.level&&(r=a[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var a=i.map((function(t){if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((function(t){return t})).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:o[n].toLowerCase(),message:a,args:i,type:e.name})}},r=0,i=s;r<i.length;r++){var c=i[r];n(c)}}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("e163"),c=n("9112"),u=n("5135"),l=n("b622"),h=n("c430"),f=l("iterator"),d=!1,p=function(){return this};[].keys&&(o=[].keys(),"next"in o?(i=a(a(o)),i!==Object.prototype&&(r=i)):d=!0);var v=void 0==r||s((function(){var t={};return r[f].call(t)!==t}));v&&(r={}),h&&!v||u(r,f)||c(r,f,p),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("06cf").f,d=n("2cf4").set,p=n("1cdc"),v=n("d4c3"),g=n("a4b4"),m=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,O=h.process,w=h.Promise,_=f(h,"queueMicrotask"),E=_&&_.value;E||(r=function(){var t,e;m&&(t=O.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},p||m||g||!y||!b?!v&&w&&w.resolve?(u=w.resolve(void 0),u.constructor=w,l=u.then,s=function(){l.call(u,r)}):s=m?function(){O.nextTick(r)}:function(){d.call(h,r)}:(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=E||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;t.exports=function(t){return o(u,t)&&(a||"string"==typeof u[t])||(a&&o(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,v,g,m){for(var y,b,O=o(p),w=i(O),_=r(v,g,3),E=s(w.length),j=0,I=m||a,T=e?I(p,E):n||f?I(p,0):void 0;E>j;j++)if((d||j in w)&&(y=w[j],b=_(y,j,O),t))if(e)T[j]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return j;case 2:c.call(T,y)}else switch(t){case 4:return!1;case 7:c.call(T,y)}return h?-1:u||l?l:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b774:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r="devtools-plugin:setup"},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),o=n("485a"),s=n("b622"),a=s("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,s=t[a];if(void 0!==s){if(void 0===e&&(e="default"),n=s.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c7b2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return xr})),n.d(e,"b",(function(){return Rr})),n.d(e,"c",(function(){return Cr})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return Pr})),n.d(e,"f",(function(){return Lr})),n.d(e,"g",(function(){return Mr})),n.d(e,"h",(function(){return Ar})),n.d(e,"i",(function(){return kr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var s,a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},c=c||{},u=a||self;function l(){}function h(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function d(t){return Object.prototype.hasOwnProperty.call(t,p)&&t[p]||(t[p]=++v)}var p="closure_uid_"+(1e9*Math.random()>>>0),v=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function y(t,e,n){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:m,y.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function O(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function w(){this.s=this.s,this.o=this.o}var _=0,E={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var t=d(this);delete E[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var j=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"===typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function T(t){t:{for(var e=zn,n=t.length,r="string"===typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function A(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t){return/^[\s\xa0]*$/.test(t)}var x,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function R(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var N=u.navigator;if(N){var L=N.userAgent;if(L){x=L;break t}}x=""}function M(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function D(t){var e={};for(var n in t)e[n]=t[n];return e}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(var o=0;o<F.length;o++)n=F[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}function B(t){var e=tt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=l;var $,H=R(x,"Opera"),z=R(x,"Trident")||R(x,"MSIE"),G=R(x,"Edge"),W=G||z,q=R(x,"Gecko")&&!(R(x.toLowerCase(),"webkit")&&!R(x,"Edge"))&&!(R(x,"Trident")||R(x,"MSIE"))&&!R(x,"Edge"),K=R(x.toLowerCase(),"webkit")&&!R(x,"Edge");function J(){var t=u.document;return t?t.documentMode:void 0}t:{var X="",Y=function(){var t=x;return q?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):H?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(X=Y?Y[1]:""),z){var Z=J();if(null!=Z&&Z>parseFloat(X)){$=String(Z);break t}}$=X}var Q,tt={};function et(){return B((function(){for(var t=0,e=C(String($)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var o=e[i]||"",s=n[i]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==o[0].length&&0==s[0].length)break;t=P(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==o[2].length,0==s[2].length)||P(o[2],s[2]),o=o[3],s=s[3]}while(0==t)}return 0<=t}))}if(u.document&&z){var nt=J();Q=nt||(parseInt($,10)||void 0)}else Q=void 0;var rt=Q,it=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",l,e),u.removeEventListener("test",l,e)}catch(n){}return t}();function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function st(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{V(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:at[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.Z.h.call(this)}}ot.prototype.h=function(){this.defaultPrevented=!0},O(st,ot);var at={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),ut=0;function lt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ut,this.ca=this.fa=!1}function ht(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ft(t){this.src=t,this.g={},this.h=0}function dt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=j(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ht(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function pt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}ft.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=pt(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new lt(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),gt={};function mt(t,e,n,r,i){if(r&&r.once)return Ot(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)mt(t,e[o],n,r,i);return null}return n=St(n),t&&t[ct]?t.N(e,n,f(r)?!!r.capture:!!r,i):yt(t,e,n,!1,r,i)}function yt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=f(i)?!!i.capture:!!i,a=It(t);if(a||(t[vt]=a=new ft(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=bt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)it||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=jt;return t}function Ot(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Ot(t,e[o],n,r,i);return null}return n=St(n),t&&t[ct]?t.O(e,n,f(r)?!!r.capture:!!r,i):yt(t,e,n,!0,r,i)}function wt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)wt(t,e[o],n,r,i);else r=f(r)?!!r.capture:!!r,n=St(n),t&&t[ct]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=pt(o,n,r,i),-1<n&&(ht(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pt(e,n,r,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ct])dt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(dt(n,t),0==n.h&&(n.src=null,e[vt]=null)):ht(t)}}}function Et(t){return t in gt?gt[t]:gt[t]="on"+t}function jt(t,e){if(t.ca)t=!0;else{e=new st(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&_t(t),t=n.call(r,e)}return t}function It(t){return t=t[vt],t instanceof ft?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function At(){w.call(this),this.i=new ft(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),U(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=xt(s,r,!0,e)&&i}if(s=e.g=t,i=xt(s,r,!0,e)&&i,i=xt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=xt(s,r,!1,e)&&i}function xt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&dt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}O(At,w),At.prototype[ct]=!0,At.prototype.removeEventListener=function(t,e,n,r){wt(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ht(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=u.JSON.stringify;function Rt(){var t=Bt,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Pt,Nt=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=Lt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),Lt=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new Mt}),(function(t){return t.reset()})),Mt=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Dt(t){u.setTimeout((function(){throw t}),0)}function Ft(t,e){Pt||Ut(),Vt||(Pt(),Vt=!0),Bt.add(t,e)}function Ut(){var t=u.Promise.resolve(void 0);Pt=function(){t.then($t)}}var Vt=!1,Bt=new Nt;function $t(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){Dt(n)}var e=Lt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vt=!1}function Ht(t,e){At.call(this),this.h=t||1,this.g=e||u,this.j=y(this.kb,this),this.l=Date.now()}function zt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=y(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=y(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Wt(t){t.g=Gt((function(){t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}O(Ht,At),s=Ht.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kt(this,"tick"),this.da&&(zt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Ht.Z.M.call(this),zt(this),delete this.g};var qt=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return i(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Wt(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(w);function Kt(t){w.call(this),this.h=t,this.g={}}O(Kt,w);var Jt=[];function Xt(t,e,n,r){Array.isArray(n)||(n&&(Jt[0]=n.toString()),n=Jt);for(var i=0;i<n.length;i++){var o=mt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Yt(t){M(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Zt(){this.g=!0}function Qt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function te(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function ee(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(r?" "+r:"")}))}function ne(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ct(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.Z.M.call(this),Yt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Zt.prototype.Aa=function(){this.g=!1},Zt.prototype.info=function(){};var ie={},oe=null;function se(){return oe=oe||new At}function ae(t){ot.call(this,ie.Ma,t)}function ce(t){var e=se();kt(e,new ae(e,t))}function ue(t,e){ot.call(this,ie.STAT_EVENT,t),this.stat=e}function le(t){var e=se();kt(e,new ue(e,t))}function he(t,e){ot.call(this,ie.Na,t),this.size=e}function fe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}ie.Ma="serverreachability",O(ae,ot),ie.STAT_EVENT="statevent",O(ue,ot),ie.Na="timingevent",O(he,ot);var de={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},pe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ge(t){return t.h||(t.h=t.i())}function me(){}ve.prototype.h=null;var ye,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Oe(){ot.call(this,"d")}function we(){ot.call(this,"c")}function _e(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Kt(this),this.P=Ie,t=W?125:void 0,this.W=new Ht(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new je}function je(){this.i=null,this.g="",this.h=!1}O(Oe,ot),O(we,ot),O(_e,ve),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},ye=new _e;var Ie=45e3,Te={},Se={};function Ae(t,e,n){t.K=1,t.v=Qe(qe(e)),t.s=n,t.U=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),Pe(t),t.A=qe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new je,t.g=wr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new qt(y(t.Ia,t,t.g),t.O)),Xt(t.V,t.g,"readystatechange",t.gb),e=t.H?D(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ce(1),Qt(t.j,t.u,t.A,t.m,t.X,t.s)}function xe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if(r=Re(t,n),r==Se){4==e&&(t.o=4,le(14),i=!1),ee(t.j,t.m,null,"[Incomplete Response]");break}if(r==Te){t.o=4,le(15),ee(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ee(t.j,t.m,r,null),Fe(t,r)}xe(t)&&r!=Se&&r!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,le(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),dr(e),e.L=!0,le(11))):(ee(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),Me(t))}function Re(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Te:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Ne(t,t.P)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=fe(y(t.eb,t),e)}function Le(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Me(t){0==t.l.G||t.I||gr(t.l,t)}function De(t){Le(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,zt(t.W),Yt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(o){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),rr(n)}fr(n),le(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=fe(y(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(o){}n.ka=void 0}}else yr(n,11)}else if((t.J||n.g==t)&&vr(n),!k(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var o=i[e];if(n.U=o[0],o=o[1],2==n.G)if("c"==o[0]){n.J=o[1],n.la=o[2];var s=o[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var a=o[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=o[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(R(l,"spdy")||R(l,"quic")||R(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(jn(h,h.h),h.h=null))}if(r.D){var f=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Ze(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var d=t;if(r.oa=Or(r,r.H?r.la:null,r.W),d.J){In(r.i,d);var p=d,v=r.K;v&&p.setTimeout(v),p.B&&(Le(p),Pe(p)),r.g=d}else hr(r);0<n.l.length&&sr(n)}else"stop"!=o[0]&&"close"!=o[0]||yr(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?yr(n,7):nr(n):"noop"!=o[0]&&n.j&&n.j.wa(o),n.A=0)}ce(4)}catch(o){}}function Ue(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(h(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ue(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Be(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Be)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function $e(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];He(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],He(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Ee.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;var e=this.L;e&&3==Xn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{var e=Xn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||W||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=e||7==n||ce(8==n||0>=r?3:2),Le(this);var i=this.g.ba();this.N=i;e:if(xe(this)){var o=Yn(this.g);t="";var s=o.length,a=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){De(this),Me(this);var c="";break e}this.h.i=new u.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(o[n],{stream:a&&n==s-1});o.splice(0,s),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,te(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(l)){var f=l;break e}}f=null}if(!(i=f)){this.i=!1,this.o=3,le(12),De(this),Me(this);break t}ee(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,i)}this.U?(Ce(this,e,c),W&&this.i&&3==e&&(Xt(this.V,this.W,"tick",this.fb),this.W.start())):(ee(this.j,this.m,c,null),Fe(this,c)),4==e&&De(this),this.i&&!this.I&&(4==e?gr(this.l,this):(this.i=!1,Pe(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,le(12)):(this.o=0,le(13)),De(this),Me(this)}}}catch(e){}},s.fb=function(){if(this.g){var t=Xn(this.g),e=this.g.ga();this.C<e.length&&(Le(this),Ce(this,t,e),this.i&&4!=t&&Pe(this))}},s.cancel=function(){this.I=!0,De(this)},s.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(ne(this.j,this.A),2!=this.K&&(ce(3),le(17)),De(this),this.o=2,Me(this)):Ne(this,this.Y-t)},s=Be.prototype,s.R=function(){$e(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return $e(this),this.g.concat()},s.get=function(t,e){return He(this.h,t)?this.h[t]:e},s.set=function(t,e){He(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Ke(this,t.j),this.s=t.s,Je(this,t.i),Xe(this,t.m),this.l=t.l,e=t.h;var n=new hn;n.i=e.i,e.g&&(n.g=new Be(e.g),n.h=e.h),Ye(this,n),this.o=t.o}else t&&(n=String(t).match(ze))?(this.g=!!e,Ke(this,n[1]||"",!0),this.s=nn(n[2]||""),Je(this,n[3]||"",!0),Xe(this,n[4]),this.l=nn(n[5]||"",!0),Ye(this,n[6]||"",!0),this.o=nn(n[7]||"")):(this.g=!!e,this.h=new hn(null,this.g))}function qe(t){return new We(t)}function Ke(t,e,n){t.j=n?nn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Je(t,e,n){t.i=n?nn(e,!0):e}function Xe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ye(t,e,n){e instanceof hn?(t.h=e,mn(t.h,t.g)):(n||(e=rn(e,un)),t.h=new hn(e,t.g))}function Ze(t,e,n){t.h.set(e,n)}function Qe(t){return Ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tn(t){return t instanceof We?qe(t):new We(t,void 0)}function en(t,e,n,r){var i=new We(null,void 0);return t&&Ke(i,t),e&&Je(i,e),n&&Xe(i,n),r&&(i.l=r),i}function nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,on),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function on(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rn(e,sn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(rn(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(rn(n,"/"==n.charAt(0)?cn:an,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rn(n,ln)),t.join("")};var sn=/[#\/\?@]/g,an=/[#\?:]/g,cn=/[#\?]/g,un=/[#\?@]/g,ln=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new Be,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function dn(t,e){fn(t),e=gn(t,e),He(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,He(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&$e(t)))}function pn(t,e){return fn(t),e=gn(t,e),He(t.g.h,e)}function vn(t,e,n){dn(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),A(n)),t.h+=n.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mn(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(dn(this,e),vn(this,n,t))}),t)),t.j=e}s=hn.prototype,s.add=function(t,e){fn(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){fn(this),this.g.forEach((function(n,r){I(n,(function(n){t.call(e,n,r,this)}),this)}),this)},s.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},s.R=function(t){fn(this);var e=[];if("string"===typeof t)pn(this,t)&&(e=S(e,this.g.get(gn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},s.set=function(t,e){return fn(this),this.i=null,t=gn(this,t),pn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var yn=function(){function t(t,e){this.h=t,this.g=e}return t}();function bn(t){this.l=t||On,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var On=10;function wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _n(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function jn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Tn(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=o(t.g.values()),s=i.next();!s.done;s=i.next()){var a=s.value;r=r.concat(a.D)}}catch(c){e={error:c}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return A(t.i)}function Sn(){}function An(){this.g=new Sn}function kn(t,e,n){var r=n||"";try{Ve(t,(function(t,n){var i=t;f(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xn(t,e){var n=new Zt;if(u.Image){var r=new Image;r.onload=b(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(Cn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Rn(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){var t,e;if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=o(this.g.values()),r=n.next();!r.done;r=n.next()){var i=r.value;i.cancel()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},Sn.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return u.JSON.parse(t,void 0)},O(Rn,ve),Rn.prototype.g=function(){return new Pn(this.l,this.j)},Rn.prototype.i=function(t){return function(){return t}}({}),O(Pn,At);var Nn=0;function Ln(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dn(t)}function Dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Pn.prototype,s.open=function(t,e){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mn(this)),this.readyState=Nn},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ln(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mn(this):Dn(this),3==this.readyState&&Ln(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Mn(this))},s.Ta=function(t){this.g&&(this.response=t,Mn(this))},s.ha=function(){this.g&&Mn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fn=u.JSON.parse;function Un(t){At.call(this),this.headers=new Be,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vn,this.K=this.L=!1}O(Un,At);var Vn="",Bn=/^https?$/i,$n=["POST","PUT"];function Hn(t){return z&&et()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function zn(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Kn(t)}function Wn(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function qn(t){if(t.h&&"undefined"!=typeof c&&(!t.C[1]||4!=Xn(t)||2!=t.ba()))if(t.v&&4==Xn(t))Gt(t.Fa,0,t);else if(kt(t,"readystatechange"),4==Xn(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var o=String(t.H).match(ze)[1]||null;if(!o&&u.self&&u.self.location){var s=u.self.location.protocol;o=s.substr(0,s.length-1)}i=!Bn.test(o?o.toLowerCase():"")}e=i}if(e)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var a=2<Xn(t)?t.g.statusText:""}catch(l){a=""}t.j=a+" ["+t.ba()+"]",Wn(t)}}finally{Kn(t)}}}function Kn(t,e){if(t.g){Jn(t);var n=t.g,r=t.C[0]?l:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Xn(t){return t.g?t.g.readyState:0}function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Zn(t){var e="";return M(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Zn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ze(t,e,n))}function tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function er(t){this.za=0,this.l=[],this.h=new Zt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=tr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=tr("baseRetryDelayMs",5e3,t),this.$a=tr("retryDelaySeedMs",1e4,t),this.Ya=tr("forwardChannelMaxRetries",2,t),this.ra=tr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function nr(t){if(ir(t),3==t.G){var e=t.V++,n=qe(t.F);Ze(n,"SID",t.J),Ze(n,"RID",e),Ze(n,"TYPE","terminate"),ur(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Qe(qe(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=wr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}br(t)}function rr(t){t.g&&(dr(t),t.g.cancel(),t.g=null)}function ir(t){rr(t),t.u&&(u.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&u.clearTimeout(t.m),t.m=null)}function or(t,e){t.l.push(new yn(t.Za++,e)),3==t.G&&sr(t)}function sr(t){wn(t.i)||t.m||(t.m=!0,Ft(t.Ha,t),t.C=0)}function ar(t,e){return!(_n(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=fe(y(t.Ha,t,e),mr(t,t.C)),t.C++,!0))}function cr(t,e){var n;n=e?e.m:t.V++;var r=qe(t.F);Ze(r,"SID",t.J),Ze(r,"RID",n),Ze(r,"AID",t.U),ur(t,r),t.o&&t.s&&Qn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=lr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),jn(t.i,n),Ae(n,r,e)}function ur(t,e){t.j&&Ve({},(function(t,n){Ze(e,n,t)}))}function lr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?y(t.j.Oa,t.j,t):null;t:for(var i=t.l,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(u-=o,0>u)o=Math.max(0,i[c].h-100),a=!1;else try{kn(l,s,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=s.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function hr(t){t.g||t.u||(t.Y=1,Ft(t.Ga,t),t.A=0)}function fr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=fe(y(t.Ga,t),mr(t,t.A)),t.A++,!0)}function dr(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function pr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=qe(t.oa);Ze(e,"RID","rpc"),Ze(e,"SID",t.J),Ze(e,"CI",t.N?"0":"1"),Ze(e,"AID",t.U),ur(t,e),Ze(e,"TYPE","xmlhttp"),t.o&&t.s&&Qn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qe(qe(e)),n.s=null,n.U=!0,ke(n,t)}function vr(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function gr(t,e){var n=null;if(t.g==e){vr(t),dr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,In(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=se(),kt(r,new he(r,n,e,i)),sr(t)}else hr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ar(t,e)||2==r&&fr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:yr(t,5);break;case 4:yr(t,10);break;case 3:yr(t,6);break;default:yr(t,2)}}function mr(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function yr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=y(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Ke(n,"https"),Qe(n)),xn(n.toString(),r)}else le(2);t.G=0,t.j&&t.j.va(e),br(t),ir(t)}function br(t){t.G=0,t.I=-1,t.j&&(0==Tn(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function Or(t,e,n){var r=tn(n);if(""!=r.i)e&&Je(r,e+"."+r.i),Xe(r,r.m);else{var i=u.location;r=en(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&M(t.aa,(function(t,e){Ze(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ze(r,e,n),Ze(r,"VER",t.ma),ur(t,r),r}function wr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Un(new Rn({ib:!0})):new Un(t.qa),e.L=t.H,e}function _r(){}function Er(){if(z&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function jr(t,e){At.call(this),this.g=new er(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!k(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Ir(t){Oe.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Tr(){we.call(this),this.status=1}function Sr(t){this.g=t}s=Un.prototype,s.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ye.g(),this.C=this.u?ge(this.u):ge(ye),this.g.onreadystatechange=y(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Gn(this,o)}t=n||"";var i=new Be(this.headers);r&&Ve(r,(function(t,e){i.set(e,t)})),r=T(i.T()),n=u.FormData&&t instanceof u.FormData,!(0<=j($n,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Gn(this,o)}},s.pa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Kn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),Un.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?qn(this):this.cb())},s.cb=function(){qn(this)},s.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=er.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Ee(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=D(n),U(n,this.P)):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var o=this.l[i];if(o="__data__"in o.g&&(o=o.g.__data__,"string"===typeof o)?o.length:void 0,void 0===o)break;if(r+=o,4096<r){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=lr(this,e,r),i=qe(this.F),Ze(i,"RID",t),Ze(i,"CVER",22),this.D&&Ze(i,"X-HTTP-Session-Id",this.D),ur(this,i),this.o&&n&&Qn(i,this.o,n),jn(this.i,e),this.Ra&&Ze(i,"TYPE","init"),this.ja?(Ze(i,"$req",r),Ze(i,"SID","null"),e.$=!0,Ae(e,i,null)):Ae(e,i,r),this.G=2}}else 3==this.G&&(t?cr(this,t):0==this.l.length||wn(this.i)||cr(this))},s.Ga=function(){if(this.u=null,pr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fe(y(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,le(10),rr(this),pr(this))},s.ab=function(){null!=this.v&&(this.v=null,rr(this),fr(this),le(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),le(2)):(this.h.info("Failed to ping google.com"),le(1))},s=_r.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Er.prototype.g=function(t,e){return new jr(t,e)},O(jr,At),jr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ft(y(t.hb,t,e))),le(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Or(t,null,t.W),sr(t)},jr.prototype.close=function(){nr(this.g)},jr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,or(this.g,e)}else this.v?(e={},e.__data__=Ct(t),or(this.g,e)):or(this.g,t)},jr.prototype.M=function(){this.g.j=null,delete this.j,nr(this.g),delete this.g,jr.Z.M.call(this)},O(Ir,Oe),O(Tr,we),O(Sr,_r),Sr.prototype.xa=function(){kt(this.g,"a")},Sr.prototype.wa=function(t){kt(this.g,new Ir(t))},Sr.prototype.va=function(t){kt(this.g,new Tr(t))},Sr.prototype.ua=function(){kt(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,jr.prototype.send=jr.prototype.u,jr.prototype.open=jr.prototype.m,jr.prototype.close=jr.prototype.close,de.NO_ERROR=0,de.TIMEOUT=8,de.HTTP_ERROR=6,pe.COMPLETE="complete",me.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",At.prototype.listen=At.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var Ar=function(){return new Er},kr=function(){return se()},xr=de,Cr=pe,Rr=ie,Pr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=Rn,Lr=me,Mr=Un}).call(this,n("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),o=n("d039"),s=n("b622"),a=n("9112"),c=s("species"),u=RegExp.prototype;t.exports=function(t,e,n,l){var h=s(t),f=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!f||!d||n){var p=/./[h],v=e(h,""[t],(function(t,e,n,r,o){var s=e.exec;return s===i||s===u.exec?f&&!o?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,v[0]),r(u,h,v[1])}l&&a(u[h],"sham",!0)}},d9b5:function(t,e,n){var r=n("d066"),i=n("fdbf");t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),s=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),l=o.values;for(var h in i){var f=r[h],d=f&&f.prototype;if(d){if(d[c]!==l)try{s(d,c,l)}catch(v){d[c]=l}if(d[u]||s(d,u,h),i[h])for(var p in o)if(d[p]!==o[p])try{s(d,p,o[p])}catch(v){d[p]=o[p]}}}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("5135"),a=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var h={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(h[e]=!0),e};u(f,l);var d=f.prototype=l.prototype;d.constructor=f;var p=d.toString,v="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(h,t))return"";var n=v?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e163:function(t,e,n){var r=n("5135"),i=n("7b0b"),o=n("f772"),s=n("e177"),a=o("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),f=n("6eeb"),d=n("e2cc"),p=n("d2bb"),v=n("d44e"),g=n("2626"),m=n("861d"),y=n("1c0b"),b=n("19aa"),O=n("8925"),w=n("2266"),_=n("1c7e"),E=n("4840"),j=n("2cf4").set,I=n("b575"),T=n("cdf9"),S=n("44de"),A=n("f069"),k=n("e667"),x=n("69f3"),C=n("94ca"),R=n("b622"),P=n("6069"),N=n("605d"),L=n("2d00"),M=R("species"),D="Promise",F=x.get,U=x.set,V=x.getterFor(D),B=h&&h.prototype,$=h,H=B,z=u.TypeError,G=u.document,W=u.process,q=A.f,K=q,J=!!(G&&G.createEvent&&u.dispatchEvent),X="function"==typeof PromiseRejectionEvent,Y="unhandledrejection",Z="rejectionhandled",Q=0,tt=1,et=2,nt=1,rt=2,it=!1,ot=C(D,(function(){var t=O($),e=t!==String($);if(!e&&66===L)return!0;if(c&&!H["finally"])return!0;if(L>=51&&/native code/.test(t))return!1;var n=new $((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[M]=r,it=n.then((function(){}))instanceof r,!it||!e&&P&&!X})),st=ot||!_((function(t){$.all(t)["catch"]((function(){}))})),at=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},ct=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;I((function(){var r=t.value,i=t.state==tt,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,h=u.resolve,f=u.reject,d=u.domain;try{l?(i||(t.rejection===rt&&ft(t),t.rejection=nt),!0===l?s=r:(d&&d.enter(),s=l(r),d&&(d.exit(),c=!0)),s===u.promise?f(z("Promise-chain cycle")):(a=at(s))?a.call(s,h,f):h(s)):f(r)}catch(p){d&&!c&&d.exit(),f(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&lt(t)}))}},ut=function(t,e,n){var r,i;J?(r=G.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!X&&(i=u["on"+t])?i(r):t===Y&&S("Unhandled promise rejection",n)},lt=function(t){j.call(u,(function(){var e,n=t.facade,r=t.value,i=ht(t);if(i&&(e=k((function(){N?W.emit("unhandledRejection",r,n):ut(Y,n,r)})),t.rejection=N||ht(t)?rt:nt,e.error))throw e.value}))},ht=function(t){return t.rejection!==nt&&!t.parent},ft=function(t){j.call(u,(function(){var e=t.facade;N?W.emit("rejectionHandled",e):ut(Z,e,t.value)}))},dt=function(t,e,n){return function(r){t(e,r,n)}},pt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=et,ct(t,!0))},vt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw z("Promise can't be resolved itself");var r=at(e);r?I((function(){var n={done:!1};try{r.call(e,dt(vt,n,t),dt(pt,n,t))}catch(i){pt(n,i,t)}})):(t.value=e,t.state=tt,ct(t,!1))}catch(i){pt({done:!1},i,t)}}};if(ot&&($=function(t){b(this,$,D),y(t),r.call(this);var e=F(this);try{t(dt(vt,e),dt(pt,e))}catch(n){pt(e,n)}},H=$.prototype,r=function(t){U(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Q,value:void 0})},r.prototype=d(H,{then:function(t,e){var n=V(this),r=q(E(this,$));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=N?W.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Q&&ct(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=F(t);this.promise=t,this.resolve=dt(vt,e),this.reject=dt(pt,e)},A.f=q=function(t){return t===$||t===o?new i(t):K(t)},!c&&"function"==typeof h&&B!==Object.prototype)){s=B.then,it||(f(B,"then",(function(t,e){var n=this;return new $((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),f(B,"catch",H["catch"],{unsafe:!0}));try{delete B.constructor}catch(gt){}p&&p(B,H)}a({global:!0,wrap:!0,forced:ot},{Promise:$}),v($,D,!1,!0),g(D),o=l(D),a({target:D,stat:!0,forced:ot},{reject:function(t){var e=q(this);return e.reject.call(void 0,t),e.promise}}),a({target:D,stat:!0,forced:c||ot},{resolve:function(t){return T(c&&this===o?$:this,t)}}),a({target:D,stat:!0,forced:st},{all:function(t){var e=this,n=q(e),r=n.resolve,i=n.reject,o=k((function(){var n=y(e.resolve),o=[],s=0,a=1;w(t,(function(t){var c=s++,u=!1;o.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=q(e),r=n.reject,i=k((function(){var i=y(e.resolve);w(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]}))},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return Xn})),n.d(e,"b",(function(){return re}));var r=n("a8e9"),i=n("5606"),o=n("9ab4"),s=n("abfd"),a=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=new r["b"]("auth","Firebase",c()),l=new s["b"]("@firebase/auth");function h(t,...e){l.logLevel<=s["a"].ERROR&&l.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw p(t,...e)}function d(t,...e){return p(t,...e)}function p(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function v(t,e,...n){if(!t)throw p(e,...n)}function g(t){const e="INTERNAL ASSERTION FAILED: "+t;throw h(e),new Error(e)}function m(t,e){t||g(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function b(t){m(t instanceof Function,"Expected a class definition");let e=y.get(t);return e?(m(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,y.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const o=n.initialize({options:e});return o}function w(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===j()||"https:"===j()}function j(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,m(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["o"])()||Object(r["p"])()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){m(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded"},C=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,o={}){return N(t,o,()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=Object(r["s"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=new(k.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),k.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function N(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),e);try{const e=new D(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw F(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,n=e.split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");f(t,s)}}catch(o){if(o instanceof r["c"])throw o;f(t,"network-request-failed")}}async function L(t,e,n,r,i={}){const o=await P(t,e,n,r,i);return"mfaPendingCredential"in o&&f(t,"multi-factor-auth-required",{serverResponse:o}),o}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?A(t.config,i):`${t.config.apiScheme}://${i}`}class D{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(d(this.auth,"timeout")),C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=d(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e=!1){const n=Object(r["i"])(t),i=await n.getIdToken(e),o=z(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:B(H(o.auth_time)),issuedAtTime:B(H(o.iat)),expirationTime:B(H(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function z(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",o),null}}function G(t){const e=z(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&q(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,V(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Q(o.providerUserInfo):[],a=Z(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Y(t){const e=Object(r["i"])(t);await X(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function Q(t){return t.map(t=>{var{providerId:e}=t,n=Object(o["f"])(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,e){const n=await N(t,{},()=>{const n=Object(r["s"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=M(t,i,"/v1/token","key="+o);return k.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await tt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new et;return n&&(v("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Object(o["f"])(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return $(this,t)}reload(){return Y(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:O,isAnonymous:w,providerData:_,stsTokenManager:E}=e;v(b&&E,t,"internal-error");const j=et.fromJSON(this.name,E);v("string"===typeof b,t,"internal-error"),nt(l,t.name),nt(h,t.name),v("boolean"===typeof O,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),nt(f,t.name),nt(d,t.name),nt(p,t.name),nt(g,t.name),nt(m,t.name),nt(y,t.name);const I=new rt({uid:b,auth:t,email:h,emailVerified:O,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:j,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(I.providerData=_.map(t=>Object.assign({},t))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new et;r.updateFromServerResponse(e);const i=new rt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}it.type="NONE";const ot=it;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class at{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=st(this.userKey,r.apiKey,i),this.fullPersistenceKey=st("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new at(b(ot),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||b(ot);const o=st(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=rt._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new at(i,t,n)):new at(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pt(e))return"Blackberry";if(vt(e))return"Webos";if(lt(e))return"Safari";if((e.includes("chrome/")||ht(e))&&!e.includes("edge/"))return"Chrome";if(dt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ut(t=Object(r["j"])()){return/firefox\//i.test(t)}function lt(t=Object(r["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ht(t=Object(r["j"])()){return/crios\//i.test(t)}function ft(t=Object(r["j"])()){return/iemobile/i.test(t)}function dt(t=Object(r["j"])()){return/android/i.test(t)}function pt(t=Object(r["j"])()){return/blackberry/i.test(t)}function vt(t=Object(r["j"])()){return/webos/i.test(t)}function gt(t=Object(r["j"])()){return/iphone|ipad|ipod/i.test(t)}function mt(t=Object(r["j"])()){var e;return gt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function yt(){return Object(r["n"])()&&10===document.documentMode}function bt(t=Object(r["j"])()){return gt(t)||dt(t)||vt(t)||pt(t)||/windows phone/i.test(t)||ft(t)}function Ot(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e=[]){let n;switch(t){case"Browser":n=ct(Object(r["j"])());break;case"Worker":n=`${ct(Object(r["j"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jt(this),this.idTokenSubscription=new jt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=b(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await at.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await X(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["i"])(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(b(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&b(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[b(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Et(t){return Object(r["i"])(t)}class jt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["f"])(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return g("not implemented")}_getIdTokenResponse(t){return g("not implemented")}_linkToIdToken(t,e){return g("not implemented")}_getReauthenticationResolver(t){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}async function kt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends It{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new xt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new xt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return St(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return At(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Tt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="http://localhost";class Pt extends It{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Object(o["f"])(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Pt(n,r);return Object.assign(s,i),s}_getIdTokenResponse(t){const e=this.buildRequest();return Ct(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Ct(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ct(t,e)}buildRequest(){const t={requestUri:Rt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["s"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",R(t,e))}async function Lt(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e))}async function Mt(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const Dt={["USER_NOT_FOUND"]:"user-not-found"};async function Ft(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,n),Dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends It{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ut({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ut({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Lt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Mt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Ft(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Ut({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bt(t){const e=Object(r["t"])(Object(r["h"])(t))["link"],n=e?Object(r["t"])(Object(r["h"])(e))["deep_link_id"]:null,i=Object(r["t"])(Object(r["h"])(t))["deep_link_id"],o=i?Object(r["t"])(Object(r["h"])(i))["link"]:null;return o||i||n||e||t}class $t{constructor(t){var e,n,i,o,s,a;const c=Object(r["t"])(Object(r["h"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Vt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Bt(t);try{return new $t(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(t,e){return xt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=$t.parseLink(e);return v(n,"argument-error"),xt._fromEmailAndCode(t,n.code,n.tenantId)}}Ht.PROVIDER_ID="password",Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends zt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Gt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch(e){return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return qt.credential(e,n)}catch(r){return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com",qt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Gt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com",Kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Gt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await rt._fromIdTokenResponse(t,n,r),o=Yt(n),s=new Xt({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Yt(n);return new Xt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Yt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Zt.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new Zt(t,e,n,r)}}function Qt(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Zt._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ee(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await W(t,Qt(r,i,e,t),n);v(o.idToken,r,"internal-error");const s=z(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(t.uid===a,r,"user-mismatch"),Xt._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e,n=!1){const r="signIn",i=await Qt(t,r,e),o=await Xt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function re(t,e,n,i){return Object(r["i"])(t).onAuthStateChanged(e,n,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}new WeakMap;const oe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(oe,"1"),this.storage.removeItem(oe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){const t=Object(r["j"])();return lt(t)||gt(t)}const ce=1e3,ue=10;class le extends se{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ae()&&Ot(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);yt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ue):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},ce)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}le.type="LOCAL";const he=le;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends se{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}fe.type="SESSION";const de=fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new ve(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await pe(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ge(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.receivers=[];class me{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=ge("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return window}function be(t){ye().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return"undefined"!==typeof ye()["WorkerGlobalScope"]&&"function"===typeof ye()["importScripts"]}async function we(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function _e(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ee(){return Oe()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="firebaseLocalStorageDb",Ie=1,Te="firebaseLocalStorage",Se="fbase_key";class Ae{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ke(t,e){return t.transaction([Te],e?"readwrite":"readonly").objectStore(Te)}function xe(){const t=indexedDB.deleteDatabase(je);return new Ae(t).toPromise()}function Ce(){const t=indexedDB.open(je,Ie);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Te,{keyPath:Se})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Te)?e(n):(n.close(),await xe(),e(await Ce()))})})}async function Re(t,e,n){const r=ke(t,!0).put({[Se]:e,value:n});return new Ae(r).toPromise()}async function Pe(t,e){const n=ke(t,!1).get(e),r=await new Ae(n).toPromise();return void 0===r?null:r.value}function Ne(t,e){const n=ke(t,!0).delete(e);return new Ae(n).toPromise()}const Le=800,Me=3;class De{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ce()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Me)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ve._getInstance(Ee()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await we(),!this.activeServiceWorker)return;this.sender=new me(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&_e()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ce();return await Re(t,oe,"1"),await Ne(t,oe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Re(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Pe(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ne(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=ke(t,!1).getAll();return new Ae(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Le)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}De.type="LOCAL";const Fe=De;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Be(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=d("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ve().appendChild(r)})}function $e(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$e("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const He="recaptcha";async function ze(t,e,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,t,"argument-error"),v(n.type===He,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){v("enroll"===e.type,t,"internal-error");const n=await ie(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,t,"missing-multi-factor-info");const s=await Ue(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Nt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(t){this.providerId=Ge.PROVIDER_ID,this.auth=Et(t)}verifyPhoneNumber(t,e){return ze(this.auth,t,Object(r["i"])(e))}static credential(t,e){return Ut._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ge.credentialFromTaggedObject(e)}static credentialFromError(t){return Ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ut._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(t,e){return e?b(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.PROVIDER_ID="phone",Ge.PHONE_SIGN_IN_METHOD="phone";class qe extends It{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ct(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ct(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ct(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ke(t){return ne(t.auth,new qe(t),t.bypassAuthState)}function Je(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ee(n,new qe(t),t.bypassAuthState)}async function Xe(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),te(n,new qe(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ke;case"linkViaPopup":case"linkViaRedirect":return Xe;case"reauthViaPopup":case"reauthViaRedirect":return Je;default:f(this.auth,"internal-error")}}resolve(t){m(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){m(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new S(2e3,1e4);class Qe extends Ye{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Qe.currentPopupAction&&Qe.currentPopupAction.cancel(),Qe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){m(1===this.filter.length,"Popup operations only handle one event");const t=ge();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(d(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,Ze.get())};t()}}Qe.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn="pendingRedirect",en=new Map;class nn extends Ye{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=en.get(this.auth._key());if(!t){try{const e=await rn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}en.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function rn(t,e){const n=sn(e),r="true"===await on(t)._get(n);return await on(t)._remove(n),r}function on(t){return b(t._redirectPersistence)}function sn(t){return st(tn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t,e,n=!1){const r=Et(t),i=We(r,e),o=new nn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn=6e5;class un{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!hn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(d(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=cn&&this.cachedEventUids.clear(),this.cachedEventUids.has(ln(t))}saveEventToCache(t){this.cachedEventUids.add(ln(t)),this.lastProcessedEventTime=Date.now()}}function ln(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function hn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function fn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vn=/^https?/;async function gn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dn(t);for(const r of e)try{if(mn(r))return}catch(n){}f(t,"unauthorized-domain")}function mn(t){const e=_(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vn.test(n))return!1;if(pn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new S(3e4,6e4);function bn(){const t=ye().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function On(t){return new Promise((e,n)=>{var r,i,o;function s(){bn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bn(),n(d(t,"network-request-failed"))},timeout:yn.get()})}if(null===(i=null===(r=ye().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=ye().gapi)||void 0===o?void 0:o.load)){const e=$e("iframefcb");return ye()[e]=()=>{gapi.load?s():n(d(t,"network-request-failed"))},Be("https://apis.google.com/js/api.js?onload="+e)}s()}}).catch(t=>{throw wn=null,t})}let wn=null;function _n(t){return wn=wn||On(t),wn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new S(5e3,15e3),jn="__/auth/iframe",In="emulator/auth/iframe",Tn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Sn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function An(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,In):`https://${t.config.authDomain}/${jn}`,o={apiKey:e.apiKey,appName:t.name,v:i["a"]},s=Sn.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["s"])(o).slice(1)}`}async function kn(t){const e=await _n(t),n=ye().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:An(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=d(t,"network-request-failed"),o=ye().setTimeout(()=>{r(i)},En.get());function s(){ye().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cn=500,Rn=600,Pn="_blank",Nn="http://localhost";class Ln{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Mn(t,e,n,i=Cn,o=Rn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},xn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=ht(l)?Pn:n),ut(l)&&(e=e||Nn,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(mt(l)&&"_self"!==c)return Dn(e||"",c),new Ln(null);const f=window.open(e||"",c,h);v(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Ln(f)}function Dn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="__/auth/handler",Un="emulator/auth/handler";function Vn(t,e,n,o,s,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(e instanceof zt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["m"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Gt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Bn(t)}?${Object(r["s"])(u).slice(1)}`}function Bn({config:t}){return t.emulator?A(t,Un):`https://${t.authDomain}/${Fn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="webStorageSupport";class Hn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=de,this._completeRedirectFn=an}async _openPopup(t,e,n,r){var i;m(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vn(t,e,n,_(),r);return Mn(t,o,ge())}async _openRedirect(t,e,n,r){return await this._originValidation(t),be(Vn(t,e,n,_(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(m(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await kn(t),n=new un(t);return e.register("authEvent",e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send($n,{type:$n},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[$n];void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=gn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||lt()||gt()}}const zn=Hn;var Gn="@firebase/auth",Wn="0.17.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jn(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wt(t)},s=new _t(e,r);return w(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=Et(t.getProvider("auth").getImmediate());return(t=>new qn(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(Gn,Wn,Kn(t))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():O(t,{popupRedirectResolver:zn,persistence:[Fe,he,de]})}Jn("Browser")},f069:function(t,e,n){"use strict";var r=n("1c0b"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),s))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),s=n("23cb"),a=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),h=n("1dde"),f=h("slice"),d=l("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,l,h=c(this),f=a(h.length),g=s(t,f),m=s(void 0===e?f:e,f);if(o(h)&&(n=h.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[d],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(h,g,m);for(r=new(void 0===n?Array:n)(v(m-g,0)),l=0;g<m;g++,l++)g in h&&u(r,l,h[g]);return r.length=l,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n("9ab4"),i=n("a8e9"),o=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),s="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(d){}try{for(var i=Object(r["h"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r["e"])(o.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(d){}}}catch(p){e={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=s),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r["g"])(Object(r["g"])([],Object(r["e"])(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r["e"])(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=s),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=s),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=Object(r["h"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["e"])(u.value,2),h=l[0],f=l[1],d=this.normalizeInstanceIdentifier(h);s===d&&f.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,o=this.onInitCallbacks.get(e);if(o)try{for(var s=Object(r["h"])(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=s),this.component?this.component.multipleInstances?t:s:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);