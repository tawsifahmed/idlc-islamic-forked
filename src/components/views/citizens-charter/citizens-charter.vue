<template>
    <div class="citizens-charter-vue" style="font-size: initial !important;">
      <app-header />
      <app-header-mobile />
      <app-side-nav />
      <app-top-curve />
      <app-slider />
      <div class="container c_c"></div>
  
      <div class="container c_c dynamic-section">
        <div class="row">
          <div class="title_wrapper">
            <h1 class="title"> {{citizensTitle}}</h1>
          </div>
        </div>
        <div class="row py-5">
            <span v-html="citizensContent">

            </span>
        </div>

        <!-- <div class="row">
          <div class="c_c_main">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong><u><span style="font-size:19px;line-height:107%;">Citizen&rsquo;s Charter:</span></u></strong></p>
<p style='margin-right:0in;margin-left:0in;font-size:16px;font-family:"Times New Roman",serif;margin:0in;margin-bottom:.0001pt;line-height:20.4pt;vertical-align:baseline;'><strong><span style='font-family:"Calibri",sans-serif;'>PREFACE:</span></strong></p>
<p style='margin-right:0in;margin-left:0in;font-size:16px;font-family:"Times New Roman",serif;margin:0in;margin-bottom:.0001pt;text-align:justify;line-height:15.0pt;vertical-align:baseline;'><a href="https://www.p4dbd.org/" target="_blank"><span style='font-size:15px;font-family:"Calibri",sans-serif;color:windowtext;text-decoration:none;'>A Citizen&rsquo;s Charter is meant to improve the accountability, transparency, and quality of services. It outlines and asserts promises of standards, and is a crucial instrument to bring about positive change&nbsp;by reinforcing responsiveness.</span></a></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Mission:</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.5in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;margin:0in;text-indent:.25in;'>We will focus on quality growth, superior customer experience, and sustainable business practices.</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.5in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;margin:0in;text-indent:.25in;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Vision</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.5in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;margin:0in;text-indent:.25in;'>We will be the best financial brand in the country.</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.5in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;margin:0in;text-indent:.25in;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Registered head office address:</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><a href="https://idlc.com/contact-us/0"><span style="color:windowtext;text-decoration:none;">Bay&rsquo;s Galleria (1st Floor), 57 Gulshan Avenue, Dhaka 1212, Bangladesh</span></a></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Contact number: 16409&nbsp;or 09609994352</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Working hours:</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>10am-5pm, Sunday-Thursday</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Branch/Booth/Priority Center locations:&nbsp;</strong></li>
    </ul>
<table style="float: left;border-collapse:collapse;border:none;margin-left:6.75pt;margin-right:6.75pt;">
    <tbody>
        <tr>
            <td style="width: 107.75pt;border: 1pt solid rgb(191, 191, 191);padding: 0in 5.4pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>&nbsp;</strong></p>
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>&nbsp;</strong></p>
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>Branch</strong></p>
            </td>
            <td style="width: 315pt;border-top: 1pt solid rgb(191, 191, 191);border-right: 1pt solid rgb(191, 191, 191);border-bottom: 1pt solid rgb(191, 191, 191);border-image: initial;border-left: none;padding: 0in 5.4pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:  15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><a href="https://www.google.com/maps/place/IDLC+Head+Office/@23.7823198,90.4163699,15z/data=!4m6!3m5!1s0x3755c79ec6c9486b:0x249d3e7f09dd6e20!8m2!3d23.7823198!4d90.4163699!16s%2Fg%2F11c6f6l9f9">Gulshan</a>, <a href="https://goo.gl/maps/kwH1BEVRQr542w9HA">Dilkusha</a>, <a href="https://goo.gl/maps/xxN2yETgGZVo4Khh8">Dhanmondi</a>, <a href="https://goo.gl/maps/BZVf6jnqy4URjNeHA">Uttara</a>, <a href="https://goo.gl/maps/tT8BRPwaRnwxXHr19">Mirpur</a>, <a href="https://goo.gl/maps/CUAEYiMSBYLYS7et6">Agrabad</a>, <a href="https://goo.gl/maps/onuHbgAdSH5Fbvwy9">Nandankanon</a>, <a href="https://goo.gl/maps/rLm3LM66zgHb6wyi6">Narayanganj</a>, <a href="https://goo.gl/maps/MFYMQ43K8heSK1JN9">Narsingdi</a>, <a href="https://goo.gl/maps/RWxNtv1XCcxCn8n17">Savar</a>, <a href="https://goo.gl/maps/rCQiKaPfbhtfeErh6">Keraniganj</a>, <a href="https://goo.gl/maps/d8cFW288yo4QkZZCA">Bogura</a>, <a href="https://goo.gl/maps/wsBR3LfLPj3eE5br8">Sylhet</a>, <a href="https://goo.gl/maps/uFPadwbmSsJS1M938">Cumilla</a>, <a href="https://goo.gl/maps/Divwbd4mWDjr21v48">Gazipur</a>, <a href="https://goo.gl/maps/AMctZ4sJwzCDzH8d6">Imamgonj</a>, <a href="https://goo.gl/maps/dN8uweqg9g21wkDM6">Tongi</a>, <a href="https://goo.gl/maps/KeGYNyYCGnMTJVwv7">Jashore</a>, <a href="https://goo.gl/maps/V8KELwE19EpWfo7v9">Khulna</a>, Natore, <a href="https://goo.gl/maps/S7gG77HwCN3nrBbz5">Bhulta</a>, <a href="https://goo.gl/maps/o9dk2RcyhZbyrXwGA">Habiganj</a>, <a href="https://goo.gl/maps/TBD6qqUcUCwyxkBP8">Kushtia</a>, <a href="https://goo.gl/maps/fgfYTjBnCTEuBckS9">Mymensingh</a>, <a href="https://goo.gl/maps/v4kWox6M6yG18GSx8">Rangpur</a>, <a href="https://goo.gl/maps/d7Z2LFHmZDkQerqr6">Chowmuhani</a>, <a href="https://goo.gl/maps/hh2zJ4JfouD5AAzd8">Elephant road</a>, <a href="https://goo.gl/maps/zZrEbfhtuSjwbt6s5">Rajshahi</a>, <a href="https://goo.gl/maps/iN4ijAYxYvha7wdh6">Barishal</a>, <a href="https://goo.gl/maps/8pTFsf4AHQtWe3c37">Faridpur</a></p>
            </td>
        </tr>
        <tr>
            <td style="width: 107.75pt;border-right: 1pt solid rgb(191, 191, 191);border-bottom: 1pt solid rgb(191, 191, 191);border-left: 1pt solid rgb(191, 191, 191);border-image: initial;border-top: none;padding: 0in 5.4pt;height: 22.9pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>Priority</strong></p>
            </td>
            <td style="width: 315pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(191, 191, 191);border-right: 1pt solid rgb(191, 191, 191);padding: 0in 5.4pt;height: 22.9pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:  15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><a href="https://www.google.com/maps/place/IDLC+Head+Office/@23.7823198,90.4163699,15z/data=!4m6!3m5!1s0x3755c79ec6c9486b:0x249d3e7f09dd6e20!8m2!3d23.7823198!4d90.4163699!16s%2Fg%2F11c6f6l9f9">Gulshan</a>, <a href="https://goo.gl/maps/xxN2yETgGZVo4Khh8">Dhanmondi</a></p>
            </td>
        </tr>
        <tr>
            <td style="width: 107.75pt;border-right: 1pt solid rgb(191, 191, 191);border-bottom: 1pt solid rgb(191, 191, 191);border-left: 1pt solid rgb(191, 191, 191);border-image: initial;border-top: none;padding: 0in 5.4pt;height: 26.5pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>Booth</strong></p>
            </td>
            <td style="width: 315pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(191, 191, 191);border-right: 1pt solid rgb(191, 191, 191);padding: 0in 5.4pt;height: 26.5pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:  15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.25in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><br></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.25in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<ul style="margin-bottom:0in;list-style-type: disc;">
    <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Purnota Desk Locations:</strong></li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.25in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'>There is a Women&rsquo;s Entrepreneur Help Desk at all IDLC Branches</p>
<table style="border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 233.75pt;border: 1pt solid rgb(191, 191, 191);padding: 0in 5.4pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'>&nbsp;</p>
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'>&nbsp;</p>
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>Purnota Desk Locations</strong></p>
            </td>
            <td style="width: 233.75pt;border-top: 1pt solid rgb(191, 191, 191);border-right: 1pt solid rgb(191, 191, 191);border-bottom: 1pt solid rgb(191, 191, 191);border-image: initial;border-left: none;padding: 0in 5.4pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:  15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><a href="https://www.google.com/maps/place/IDLC+Head+Office/@23.7823198,90.4163699,15z/data=!4m6!3m5!1s0x3755c79ec6c9486b:0x249d3e7f09dd6e20!8m2!3d23.7823198!4d90.4163699!16s%2Fg%2F11c6f6l9f9">Gulshan</a>, <a href="https://goo.gl/maps/kwH1BEVRQr542w9HA">Dilkusha</a>, <a href="https://goo.gl/maps/xxN2yETgGZVo4Khh8">Dhanmondi</a>, <a href="https://goo.gl/maps/BZVf6jnqy4URjNeHA">Uttara</a>, <a href="https://goo.gl/maps/tT8BRPwaRnwxXHr19">Mirpur</a>, <a href="https://goo.gl/maps/CUAEYiMSBYLYS7et6">Agrabad</a>, <a href="https://goo.gl/maps/onuHbgAdSH5Fbvwy9">Nandankanon</a>, <a href="https://goo.gl/maps/rLm3LM66zgHb6wyi6">Narayanganj</a>, <a href="https://goo.gl/maps/MFYMQ43K8heSK1JN9">Narsingdi</a>, <a href="https://goo.gl/maps/RWxNtv1XCcxCn8n17">Savar</a>, <a href="https://goo.gl/maps/rCQiKaPfbhtfeErh6">Keraniganj</a>, <a href="https://goo.gl/maps/d8cFW288yo4QkZZCA">Bogura</a>, <a href="https://goo.gl/maps/wsBR3LfLPj3eE5br8">Sylhet</a>, <a href="https://goo.gl/maps/uFPadwbmSsJS1M938">Cumilla</a>, <a href="https://goo.gl/maps/Divwbd4mWDjr21v48">Gazipur</a>, <a href="https://goo.gl/maps/AMctZ4sJwzCDzH8d6">Imamgonj</a>, <a href="https://goo.gl/maps/dN8uweqg9g21wkDM6">Tongi</a>, <a href="https://goo.gl/maps/KeGYNyYCGnMTJVwv7">Jashore</a>, <a href="https://goo.gl/maps/V8KELwE19EpWfo7v9">Khulna</a>, Natore, <a href="https://goo.gl/maps/S7gG77HwCN3nrBbz5">Bhulta</a>, <a href="https://goo.gl/maps/o9dk2RcyhZbyrXwGA">Habiganj</a>, <a href="https://goo.gl/maps/TBD6qqUcUCwyxkBP8">Kushtia</a>, <a href="https://goo.gl/maps/fgfYTjBnCTEuBckS9">Mymensingh</a>, <a href="https://goo.gl/maps/v4kWox6M6yG18GSx8">Rangpur</a>, <a href="https://goo.gl/maps/d7Z2LFHmZDkQerqr6">Chowmuhani</a>, <a href="https://goo.gl/maps/hh2zJ4JfouD5AAzd8">Elephant road</a>, <a href="https://goo.gl/maps/zZrEbfhtuSjwbt6s5">Rajshahi</a>, <a href="https://goo.gl/maps/iN4ijAYxYvha7wdh6">Barishal</a>, <a href="https://goo.gl/maps/8pTFsf4AHQtWe3c37">Faridpur</a></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.25in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.25in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Sustainable Finance Desk:</strong></li>
    </ul>
</div>
<table style="border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 233.75pt;border: 1pt solid rgb(191, 191, 191);padding: 0in 5.4pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>&nbsp;</strong></p>
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>Sustainable Finance Desk</strong></p>
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong>&nbsp;</strong></p>
            </td>
            <td style="width: 233.75pt;border-top: 1pt solid rgb(191, 191, 191);border-right: 1pt solid rgb(191, 191, 191);border-bottom: 1pt solid rgb(191, 191, 191);border-image: initial;border-left: none;padding: 0in 5.4pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:  15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><a href="https://www.google.com/maps/place/IDLC+Head+Office/@23.7823198,90.4163699,15z/data=!4m6!3m5!1s0x3755c79ec6c9486b:0x249d3e7f09dd6e20!8m2!3d23.7823198!4d90.4163699!16s%2Fg%2F11c6f6l9f9">Gulshan</a>, <a href="https://goo.gl/maps/kwH1BEVRQr542w9HA">Dilkusha</a>, <a href="https://goo.gl/maps/hh2zJ4JfouD5AAzd8">Elephant road</a>, <a href="https://goo.gl/maps/dN8uweqg9g21wkDM6">Tongi</a>, <a href="https://goo.gl/maps/uFPadwbmSsJS1M938">Cumilla</a>, <a href="https://goo.gl/maps/Divwbd4mWDjr21v48">Gazipur</a>, <a href="https://goo.gl/maps/CUAEYiMSBYLYS7et6">Agrabad</a>, <a href="https://goo.gl/maps/v4kWox6M6yG18GSx8">Rangpur</a>, <a href="https://goo.gl/maps/wsBR3LfLPj3eE5br8">Sylhet</a>, <a href="https://goo.gl/maps/KeGYNyYCGnMTJVwv7">Jashore</a>,</p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.25in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Call Center Number &amp; Working Hours:</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>16409, 9am-8pm (Sunday-Thursday)</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><strong>&nbsp;</strong></p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Website:</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><a href="www.idlc.com">www.idlc.com</a></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><strong>&nbsp;</strong></p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Facebook:</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><a href="https://www.facebook.com/IDLC.BD/">IDLC - Financing Happiness&nbsp;</a></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><strong>&nbsp;</strong></p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;margin-left:0in;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Complaint Cell details:&nbsp;</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><strong>Mahbub-Ul-Kader</strong></p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Deputy General Manager</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Group Head of Internal Control &amp; Compliance Department</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><strong>Contact Address:</strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Bay&rsquo;s Galleria (1st Floor), 57 Gulshan Avenue, Gulshan-1, Dhaka-1212</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><strong>Phone No:</strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>16409&nbsp;or 09609994352</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Ext: 31112</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><strong><span style='font-size:14px;font-family:"Helvetica",sans-serif;'>E-Mail:</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><span style='font-size:14px;font-family:"Times New Roman",serif;'>complaintcell@idlc.com</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><span style='font-size:14px;font-family:"Times New Roman",serif;'>mahbub@idlc.com</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0in;list-style-type: disc;margin-left: 0;">
        <li style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Citizen&rsquo;s Charter Team details:</strong></li>
    </ul>
</div>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Naz Hussain,</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Head of Customer Experience Department</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Contact address: Bay&rsquo;s Galleria (4th Floor), 57 Gulshan Avenue, Gulshan-1, Dhaka-1212</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Mobile# 01713071300</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Email address: <a href="mailto:nazhussain@idlc.com"><span style="color:windowtext;text-decoration:none;">nazhussain@idlc.com</span></a></p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Samia Mohsin</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Manager Customer Experience Department</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Contact address: Bay&rsquo;s Galleria (4th Floor), 57 Gulshan Avenue, Gulshan-1, Dhaka-1212</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Mobile# 01755728288</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'><em>Email address: <a href="mailto:samia@idlc.com">samia@idlc.com</a></em></p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Sultana Razia</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Manager Customer Experience Department</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Contact address: D R Tower (7th Floor), <span style='font-size:14px;font-family:"Arial",sans-serif;color:#202124;background:white;'>Bir Protik, 65/2/2, Gazi Golam Dostagir Road, Dhaka 1000</span></p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Mobile# 01713559426</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Email address: <a href="mailto:sultana@idlc.com"><span style="color:windowtext;text-decoration:none;">sultana@idlc.com</span></a></p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Mostafa Raiyan Islam</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Officer Customer Experience Department</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Contact address: Bay&rsquo;s Galleria (4th Floor), 57 Gulshan Avenue, Gulshan-1, Dhaka-1212</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Mobile# 01700701416</p>
<p style='margin-top:0in;margin-right:-11.25pt;margin-bottom:.0001pt;margin-left:0in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.25in;'>Email address: <a href="mailto:rmostofa@idlc.com"><span style="color:windowtext;text-decoration:none;">rmostofa@idlc.com</span></a></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>

<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:.25in;line-height:15.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><a href="http://idlc.com/regulatory-disclosure/rd"><strong><span style="font-size:19px;line-height:107%;">Fee &amp; Charges&nbsp;</span></strong></a></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.5in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.5in;'><strong><span style="font-size:19px;line-height:107%;">Customers&rsquo; Rights/IDLC&rsquo;s Obligations:</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:.5in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>Customers of both deposits and loans have the right to obtain the following information from IDLC:</p>
<ul style="list-style-type: disc; margin-left:0.25in;">
    <li>the term/tenor of the fixed deposit or loan;</li>
    <li>the fees &amp; charges, if any, and consequences of premature termination of a term deposit or loan;</li>
    <li>whether the interest rate/tenor is fixed or variable;</li>
    <li>the frequency on which interest payments or deductions are to be made;</li>
    <li>total amount of income that the customers shall receive on the term deposits;</li>
    <li>schedule of charges, fees, commissions payable for the products or services that the customers have chosen;</li>
    <li>any additional charges or expenses that the customers have to pay to obtain additional service;</li>
    <li>any changes to existing terms and conditions, fees or charges, discontinuation of services or relocation of premises of IDLC;</li>
    <li>any changes in the existing interest rates of the product;</li>
    <li>financial statement, financial performance indicators etc.;</li>
    <li>operating hours and holiday notices; and</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.5in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.5in;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-indent:.5in;'><strong><span style="font-size:19px;line-height:107%;">IDLC&rsquo;s Rights/Customers&rsquo; Obligations</span></strong><span style="font-size:19px;line-height:107%;">&nbsp;</span></p>
<ul style="list-style-type: disc;margin-left: 0.25in;">
    <li>Customers shall follow standard banking norms &amp; practices, as well as, policies of IDLC. &nbsp;&nbsp;</li>
    <li>Customers shall abide by the terms and conditions given for each product and service.</li>
    <li>Customers shall maintain decorum and discipline at all customer service points.</li>
    <li>Customers shall convey their grievance/complaints through proper channels.</li>
    <li>Customers shall inform IDLC of any changes in their address, contact numbers, email address and KYC.</li>
    <li>Customer shall not make unreasonable demands or display unruly behavior.</li>
</ul>
          </div>
        </div> -->
      </div>

      <app-footer />
  
    </div>
  </template>
  
  
  <script>
    import axios from 'axios'
    export default {
      name: 'Citizens Charter',
      components: {
        AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
        AppHeader: () => import('../../incudes/Header'),
        AppSideNav: () => import('../../incudes/SideNav'),
        AppTopCurve: () => import('../../incudes/SlimTopCurve'),
        AppCoverImage: () => import('../../incudes/CoverImage'),
        AppFooter: () => import('../../incudes/Footer'),
        AppSlider: () => import("../../incudes/Slider"),
      },
      data(){
        return{
            citizensTitle: [],
            citizensContent: "",
        }
      },
      methods:{
        async getCitizens() {
      try { 
        const res = await axios.get('citizens-charter').then((res) =>{
          this.citizensTitle = res.data.data.title
          this.citizensContent = res.data.data.content
        }).catch((err) =>{
          console.log(err)
        })
      }catch(error){
        console.log(error)
      }
    },
      },
      created(){
        this.getCitizens();
      },
    }
  </script>
  <style scoped>
    .c_c .title_wrapper{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 50px 0;
    }
    .c_c .title{
      font-size: 2rem;
      line-height: 28px;
      color: aliceblue;
      text-align: center;
      font-weight: 700;
    }

    .c_c_main {
      margin: 50px 0;
    }
    .c_c_main h1{
      
    }

    .c_c_main table {
      margin: initial !important;
    }
  
    @media screen and (max-width: 770px) {
  
    }
    table tbody tr:first-child{
        background: transparent !important;
    }
  </style>
  