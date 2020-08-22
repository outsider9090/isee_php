<!DOCTYPE html>
<html lang="en" dir="rtl">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
    <title> ارسال محصول جدید</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no"/>
    <link rel="shortcut icon" href="#">
    <meta name="keywords" content="stm32f103zct6,arm®,cortex®,m3,stm32f1,microcontroller,ic,32,bit,72mhz,256kb,256k,8,flash,144,lqfp,20x20">
    <meta name="description" content="ARM® Cortex®-M3 STM32F1 Microcontroller IC 32-Bit 72MHz 256KB (256K x 8) FLASH 144-LQFP (20x20)">
    <meta name="application-name" content="STM32F103ZCT6">
    <meta name="author" content="http://yabco.ir" />
    <meta name="robots" content="all, index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="geo.region" content="IR" />
    <meta name="dcterms.identifier" content="http://yabco.ir" />
    <meta name="dcterms.title" content="STM32F103ZCT6" />
    <meta name="dcterms.description" content="ARM® Cortex®-M3 STM32F1 Microcontroller IC 32-Bit 72MHz 256KB (256K x 8) FLASH 144-LQFP (20x20)" />
    <meta name="dcterms.subject" content="ARM® Cortex®-M3 STM32F1 Microcontroller IC 32-Bit 72MHz 256KB (256K x 8) FLASH 144-LQFP (20x20)" />
    <meta property="og:title" content="STM32F103ZCT6" />
    <meta property="og:description" content="ARM® Cortex®-M3 STM32F1 Microcontroller IC 32-Bit 72MHz 256KB (256K x 8) FLASH 144-LQFP (20x20)" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,  minimum-scale=1.0"/>
    <link rel="icon" href="assets/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="assets/css/styles.css" />
    <link rel="stylesheet" href="assets/css/responsive.css" />
</head>
<body style="background-color: #f7fcff;">



<header>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_navbar" aria-controls="main_navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="index.html" id="navbarBrandDesktop">
            <img src="./assets/images/logo.png" alt="">
        </a>
        <div class="navbar_search_box">
            <form action="products.html">
                <div class="search_frm_container input-group mb-3">
                    <input type="text" class="form-control" aria-label=""
                           aria-describedby="search_btn" id="search_frm_input" autocomplete="off">
                    <i class="material-icons" id="search_btn_icon">search</i>
                    <i class="material-icons" id="clear_btn" title="Clear">close</i>
                </div>
            </form>
        </div>
        <a class="navbar-brand" href="index.html" id="navbarBrandMobile">
            <img src="./assets/images/logo.png" alt="">
        </a>
        <div class="collapse navbar-collapse" id="main_navbar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html"><i class="material-icons">home</i><span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<section id="main-page-back-color"></section>
<main style="margin-top: 100px;">
    <div class="container w-100">
        <div class="row my-5">
            <div class="col-12">
                <div class="send_product_form_container">
                    <div class="card">
                        <div class="card-body">
                            <form action="insert_product.php" method="post" class="send_product_frm" id="send_product_frm"
                                  novalidate enctype="multipart/form-data">
                                <fieldset class="mb-5">
                                    <h5 class="text-center">ارسال محصول جدید</h5>
                                </fieldset>
                                <div class="form-row">
                                    <div class="col-12 mb-4 required">
                                        <label for="partnumber">شماره قطعه</label>
                                        <input type="text" class="form-control" id="partnumber" name="partnumber" required>
                                        <div class="invalid-feedback">
                                            <span>لطفا نام خود را وارد کنید</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-12 mb-4 required">
                                        <label for="description">توضیحات قطعه</label>
                                        <input type="text" class="form-control" id="description" name="description" required>
                                        <div class="invalid-feedback">
                                            <span>لطفا نام خود را وارد کنید</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-12 mb-4">
                                        <label for="detaileddescription">توصیف همراه با جزئیات</label>
                                        <input type="text" class="form-control" id="detaileddescription" name="detaileddescription">
                                        <div class="invalid-feedback">
                                            <span>لطفا نام خود را وارد کنید</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="add_image_fieldset" style="position: relative;">
                                    <fieldset class="mb-2">
                                        <h6 class="text-right font-weight-bold"> تصویر قطعه</h6>
                                        <button type="button" class="btn btn-info rounded-circle" data-toggle="tooltip" data-placement="bottom" title="افزودن تصویر"
                                                id="add_image_input" style="width:50px ;height: 50px;">
                                            <i class="material-icons align-middle">add</i>
                                        </button>
                                    </fieldset>
                                    <div class="form-row addImage">
                                        <div class="col-12 mb-4">
                                            <label for="Image">تصویر </label>
<!--                                            <input type="file" class="form-control" id="Image" name="fileToUpload" accept="image/*">-->
                                            <input type="file" class="form-control" id="Image" name="part_image[0][name]" accept="image/*">
                                        </div>
                                    </div>
                                </div>


                                <div class="add_document_fieldset" style="position: relative;">
                                    <fieldset class="mb-2">
                                        <h6 class="text-right font-weight-bold">اسناد</h6>
                                        <button type="button" class="btn btn-info rounded-circle" data-toggle="tooltip" data-placement="bottom" title="افزودن سند"
                                                id="add_doc_input" style="width:50px ;height: 50px;">
                                            <i class="material-icons align-middle">add</i>
                                        </button>
                                    </fieldset>
                                    <div class="form-row addDocument">
                                        <div class="col-md-4 col-sm-12 mb-4">
                                            <label for="Doc_type">نوع سند </label>
                                            <input type="text" class="form-control" id="Doc_type" name="docType[0][type]" required>
                                        </div>
                                        <div class="col-md-4 col-sm-12 mb-4">
                                            <label for="Doc_name">نام سند </label>
                                            <input type="text" class="form-control" id="Doc_name" name="docName[0][name]" required>
                                        </div>
                                        <div class="col-md-4 col-sm-12 mb-4">
                                            <label for="Doc_url">آدرس سند </label>
                                            <input type="text" class="form-control" id="Doc_url" name="docUrl[0][url]" required>
                                        </div>
                                    </div>
                                </div>

                                <div class="add_spec_fieldset" style="position: relative;">
                                    <fieldset class="mb-2">
                                        <h6 class="text-right font-weight-bold">ویژگی های قطعه</h6>
                                        <button type="button" class="btn btn-info rounded-circle" data-toggle="tooltip" data-placement="bottom" title="افزودن ویژگی"
                                                id="add_spec_input" style="width:50px ;height: 50px;">
                                            <i class="material-icons align-middle">add</i>
                                        </button>
                                    </fieldset>
                                </div>
                                <div class="form-row addAttrib">
                                    <div class="col-md-6 col-sm-12 mb-4">
                                        <label for="Attribute_name">عنوان ویژگی </label>
                                        <input type="text" class="form-control" id="Attribute_name" name="attribName[0][name]" required>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-4">
                                        <label for="Attribute_value">مقدار ویژگی </label>
                                        <input type="text" class="form-control" id="Attribute_value" name="attribValue[0][value]" required>
                                    </div>
                                </div>
                                <div class="row my-4">
                                    <button class="btn btn-info btn-block btn-lg" type="submit" name="btn_send_product" id="send_product_frm_submit">ثبت</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>


<footer>
    <nav class="footer">
        <ul class="mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="about_us.html">درباره ما </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact_us.html">تماس با ما</a>
            </li>
        </ul>
    </nav>
</footer>


<script src="assets/js/jquery-3.4.1.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/jquery.ez-plus.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/scripts.js"></script>
</body>
</html>
