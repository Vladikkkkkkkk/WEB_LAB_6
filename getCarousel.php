<?php
if (file_exists('carousel.json')) {
    echo file_get_contents('carousel.json');
} else {
    echo json_encode(['slides' => []]);
}
?>
