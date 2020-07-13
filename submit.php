<?php
    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $subject="Query from WA c2k"
        $mailFrom=$_POST['mail'];
        $message=$_POST['message'];

        $mailTo="nssk1999@gmail.com";
        $headers="From: ".$mailFrom;
        $txt="You have received a qurey from WA-C2K by ".$name.".\n\n".$message;
        mail($mailTo,$subject,$txt,$headers);
        header("Location: pages/contact.html")
    }
?>