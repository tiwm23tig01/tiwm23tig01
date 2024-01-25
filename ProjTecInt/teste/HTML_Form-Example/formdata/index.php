<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Form Example</title>
<script type="text/javascript">
<?php
    if(isset($_POST["submit"])){
        $name=$_POST["user_name"];
        $email=$_POST["user_mail"];
        $message=$_POST["user_message"];

        $fileHandle = fopen('emailList.txt', 'a') OR die ("Can't open file\n");
        $result = fwrite ($fileHandle, "NEW MESSAGE FROM " . $name . ", " . $email . ", " . $message . "\r\n");
        fclose($fileHandle);
        if ($result) {
            echo 'alert("Message added!");'; 
        } else {
           echo 'alert("Message not added!");'; 
        };
    }else{
        echo 'alert("Some ERROR has occurred!);';
    }
?>
window.location.replace("../");
</script>  
</head>
<body>
</body>
</html>