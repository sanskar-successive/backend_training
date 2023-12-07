1XX — Informational Responses
2XX — Success Responses
3XX — Redirection Responses
4XX — Client Error Responses
5XX — Server Error Responses

**1XX Codes**
An informational response lets the browser know that the request to load a website or document was received and understood. Codes like these are issued while the request processing continues on the server, and it lets the browser know that it should wait for a final response.

**100 — Continue**
A status code of 100 indicates that (usually the first) part of a request has been received without any problems, and that the rest of the request should now be sent.

**2XX Codes**
A success response lets the browser know that the request was received, understood, and accepted — that's what separates them from the 1XX codes.

**200 — OK**
This is the code that browsers receive when everything has gone right.

**201 — Created**
This code indicates that a request was successful and as a result, a resource has been created.

**204 — No Content**
The 204 status code means that the request was received and understood, but that there is no need to send any data back.

**205 — Reset Content**
This code is a request from the server to the client to reset the document from which the original request was sent. For example, if a user fills out a form, and submits it, a status code of 205 means the server is asking the browser to clear the form.

**206 — Partial Content**
This is a response to a request for part of a document. This is used by advanced caching tools, when a browser requests only a small part of a page, and just that section is returned.

**3XX Codes**
These status codes tell the browser that it must take additional action to complete the request. Many of these status codes are used in URL redirection.

**300 — Multiple Choices**
The 300 status code indicates that a page or document has moved. The response will also include a list of new locations so the browser can pick a place to redirect to.

**301 — Moved Permanently**
This tells a browser that the resource it asked for has permanently moved to a new location. The response should also include the location. It also tells the browser which URL to use the next time it wants to fetch it.

**304 — Not Modified**
The 304 status code is sent in response to a request (for a document) that asked for the document only if it was newer than the one the client already had. Normally, when a document is cached, the date it was cached is stored. The next time the document is viewed, the client asks the server if the document has changed. If not, the client just reloads the document from the cache.

**307 — Temporary Redirect**
307 is the status code that is sent when a document is temporarily available at a different URL, which is also returned. There is very little difference between a 302 status code and a 307 status code. 307 was created as another, less ambiguous, version of the 302 status code.

**4XX Codes**
This type of status code is intended for situations in which an error seems to have been caused by the browser or user, like the infamous 404 error.

**400 — Bad Request**
A status code of 400 indicates that the server did not understand the request due to bad syntax.

**401 — Unauthorized**
A 401 status code indicates that before a resource can be accessed, the client must be authorised by the server.

**402 — Payment Required**
The 402 status code is not currently in use, being listed as "reserved for future use". It's interesting to think about how this will be used in the future, especially now that Chrome natively blocks some intrusive ads.

**403 — Forbidden**
A 403 status code indicates that the client cannot access the requested resource. That might mean that the wrong username and password were sent in the request, or that the permissions on the server do not allow what was being asked.

**404 — Not Found**
The best known of them all, the 404 status code indicates that the requested resource was not found at the URL given, and the server has no idea how long for.

**408 — Request Timeout**
A 408 status code means that the client did not produce a request quickly enough. A server is set to only wait a certain amount of time for responses from clients, and a 408 status code indicates that time has passed.

**410 — Gone**
A 410 status code is the 404's lesser known cousin. It indicates that a resource has permanently gone (a 404 status code gives no indication if a resource has gone permanently or temporarily), and no new address is known for it.

**415 — Unsupported Media Type**
A 415 status code is returned by a server to indicate that part of the request was in an unsupported format.

**5XX Codes**
Simply put, these codes are sent when the server failed to fulfil a request.

**500 - Internal Server Error**
A 500 status code (which developers see more often that they want) indicates that the server encountered something it didn't expect and was unable to complete the request.

**503 — Service Unavailable**
A 503 status code is most often seen on extremely busy servers, and it indicates that the server was unable to complete the request due to a server overload.


400	BadRequest
401	Unauthorized
402	PaymentRequired
403	Forbidden
404	NotFound
405	MethodNotAllowed
406	NotAcceptable
407	ProxyAuthenticationRequired
408	RequestTimeout
409	Conflict
410	Gone
411	LengthRequired
412	PreconditionFailed
413	PayloadTooLarge
414	URITooLong
415	UnsupportedMediaType
416	RangeNotSatisfiable
417	ExpectationFailed
418	ImATeapot
421	MisdirectedRequest
422	UnprocessableEntity
423	Locked
424	FailedDependency
425	TooEarly
426	UpgradeRequired
428	PreconditionRequired
429	TooManyRequests
431	RequestHeaderFieldsTooLarge
451	UnavailableForLegalReasons
500	InternalServerError
501	NotImplemented
502	BadGateway
503	ServiceUnavailable
504	GatewayTimeout
505	HTTPVersionNotSupported
506	VariantAlsoNegotiates
507	InsufficientStorage
508	LoopDetected
509	BandwidthLimitExceeded
510	NotExtended
511	NetworkAuthenticationRequired