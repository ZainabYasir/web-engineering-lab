## Task 03

Strategy	Time in source?	Changes on refresh?	Works without JS?
CSR      	No	                 Yes	            No
SSR	        Yes	                 Yes	            Yes
SSG	        Yes	                 No	                Yes
ISR	        Yes	               After 5 seconds	    Yes

## Task 4: Streaming Test

- TTFB: Approximately 1.70 ms
- Total time: Approximately 1.53 seconds

### Observation
The heading and first paragraph appeared immediately,
while the second paragraph appeared after approximately
1.5 seconds.

### When does streaming help?
Streaming helps when some page content is ready
immediately but other content takes longer to load.
It allows the browser to display available content
without waiting for the complete page.

## Task 05: Choosing Rendering Strategies

1. Blog Post:
   SSG because blog content is mostly static and can be generated
   before users visit the page.

2. Live Stock-Price Dashboard:
   Streaming because the page can show its main layout immediately
   while live data loads.

3. User Account Page:
   SSR because account information is personalized for each user.