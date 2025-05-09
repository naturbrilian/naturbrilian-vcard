import PageHeader from "@/components/page-header";
import AnimatedSection from "@/components/animated-section";
import markdownToHtml from "@/lib/markdownToHtml";

import { cn } from "@workspace/ui/lib/utils";

import markdownStyles from "@/styles/markdown-styles.module.css";

const terms = `
At Lieba Natur Brilian Blog, accessible from https://naturbrilian.my.id, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Lieba Natur Brilian Blog and how we use it.
If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

# Log Files
Lieba Natur Brilian Blog follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.

# Cookies and Web Beacons
Like any other website, Lieba Natur Brilian Blog uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.

# Privacy Policies
You may consult this list to find the Privacy Policy for each of the advertising partners of Lieba Natur Brilian Blog.
Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Lieba Natur Brilian Blog, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit..
Note that Lieba Natur Brilian Blog has no access to or control over these cookies that are used by third-party advertisers.

# Third Party Privacy Policies
Lieba Natur Brilian Blog's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?

# Children's Information
Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
Lieba Natur Brilian Blog does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
Online Privacy Policy Only

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Lieba Natur Brilian Blog. This policy is not applicable to any information collected offline or via channels other than this website.
Consent

By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.


`;

async function Terms() {
  const content = await markdownToHtml(terms || "");

  return (
    <article>
      <AnimatedSection id="terms">
        <PageHeader header="Terms of Service" />
      </AnimatedSection>
      <div
        className={cn(markdownStyles["markdown"])}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}

export default Terms;
