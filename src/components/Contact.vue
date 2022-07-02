<template>
  <ContentLayout :title="'Contact me'">
    <div class="contact-wrapper">
      <div class="contact-msg">
        If you are interested in working with me, please feel free to contact me
        and just say hi, then get in touch.
      </div>
      <div class="contact-footer">
        <a href="mailto:dummy@dummy.com" class="contact-btn">
          <font-awesome-icon icon="envelope" class="envelop" />Message me</a
        >
        <div class="footer-msg">
          Send an email to me: <span>dummy@dummy.com</span>
        </div>
      </div>
    </div>
  </ContentLayout>
</template>

<script>
import ContentLayout from "./ContentLayout";

export default {
  components: { ContentLayout },
};
</script>

<style>
.contact-msg {
  width: 50%;
  font-size: 2rem;
  color: white;
  margin: 0 auto;
  font-weight: bold;
}
.contact-footer {
  margin-top: 70px;
}
.contact-btn {
  display: inline-block;
  width: 10rem;
  padding: 0.5em;
  font-weight: bold;
  font-size: 1em;
  color: #2f2f2f;
  background: #fff;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  text-decoration: none;
}
.envelop {
  padding-right: 10px;
}
.footer-msg {
  font-size: 1.5rem;
  color: white;
  margin-top: 20px;
}
.footer-msg span {
  text-decoration: underline;
}
</style>
