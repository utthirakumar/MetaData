$(document).ready(function() {
    var i = 1;
    $('#add').click(function() {
        i++;
        $('#card').append('    <div  id="card' + i + '">  <div class="row "><div class="col-11 "><div class="card-header" role="tab" id="headingThree3"> <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThreekick' + i + '"  aria-expanded="false" aria-controls="collapseThree3"><h5 class="mb-0">kick starts menu <i class="fas fa-angle-down rotate-icon"></i> </h5></a></div></div><div class="col-1 "><button name="remove" id="' + i + '" class=" kick btn btn-danger btn-remove">X</button></div></div><div id="collapseThreekick' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx"><div class="card-body " id="3sub"><div class="form-group row"><label for="" class="col-form-label col-2">ksId</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksId]]" id="ksid' + i + '" class="num col-7 form-control"  required   ><span id="ksid' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">ksName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksName]]"id="ksname' + i + '" class="str col-7 form-control" required><span id="ksname' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">isoFileName</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[isoFileName]]" id="isofile' + i + '" class="iso col-7 form-control"   required><span id="isofile' + i + 'err"></span> </div><div class="card"><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub1' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">Docs <i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub1' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub1"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">documentName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[docs]][[documentName]]" id="docna' + i + '" class="str col-7  form-control"required> <span id="docna' + i + 'err"></span>    </div><div class="form-group row"><label for="" class="col-form-label col-2">fileName</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[docs]][[fileName]]"  id="filna' + i + '" class="str col-7  form-control"  required ><span id="filna' + i + 'err"></span> </div></div></div></div><div class="form-group row"><label for="" class="col-form-label col-2">hashType</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hashType]]" id="hashty' + i + '" class="str   col-7  form-control"required><span id="hashty' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">hash</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hash]]"  id="Hash' + i + '"   class="has col-7 form-control"required><span id="Hash' + i + 'err"></span>                          </div><div class="form-group row"><label for="" class="col-form-label col-2">hashFileName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hashFileName]]"  id="hashfi' + i + '" class="str col-7 form-control"required><span id="hashfi' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">versionNo</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[versionNo]]" id="versno' + i + '" class="ver col-7 form-control" required><span id="versno' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">createdDate</label><input type="Date" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[createdDate]]"  id="creda' + i + '"   class="dat   col-7  form-control" required><span id="creda' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">modifiedDate</label><input type="date" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[modifiedDate]]"  id="moddate' + i + '"   class="dat   col-7  form-control" required><span id="moddate' + i + 'err"></span></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub2' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">ossToolsUsed<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub2' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub2"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">toolId</label>  <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[toolId]]" id="tolid' + i + '"class="num col-7 form-control"required><span id="tolid' + i + 'err"></span>   </div><div class="form-group row"><label for="" class="col-form-label col-2">version</label>                     <input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[version]]"  id="versii' + i + '"   class="ver col-7 form-control"required><span id="versii' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">toolId</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[toolId]]" id="tooli' + i + '"   class="num col-7 form-control"required><span id="tooli' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label>        <input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[version]]"  id="versi' + i + '"   class="ver col-7 form-control"required><span id="versi' + i + 'err"></span></div></div></div></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3' + i + '"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub3' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">otherToolsUsed<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub3' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub3"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">toolName</label> <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[otherToolsUsed]][[toolName]]" id="ottoona' + i + '"class="str col-7  form-control"required><span id="ottoona' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label>  <input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[otherToolsUsed]][[version]]"  id="otver' + i + '" class="ver col-7 form-control"required><span id="otver' + i + 'err"></span></div></div></div></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub4' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">user applications<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub4' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub4"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">application name</label>    <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[userApplications]][[applicationName]]" id="appnam' + i + '" class="str col-7  form-control"  required><span id="appnam' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[userApplications]][[version]]"  id="appver' + i + '"   class="ver col-7  form-control"  required><span id="appver' + i + 'err"></span></div></div></div></div><br><div class="form-group row"><label for="" class="col-form-label col-2">ksorder</label>  <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksOrder]]"  id="ksor' + i + '" class="num col-7 form-control"required><span id="ksor' + i + 'err"></span></div></div></div></div>');
    });

    $(document).on('click', '.kick', function() {
        var butid = $(this).attr("id");
        $("#card" + butid).remove();
    });

    $('#addsub').click(function() {
        i++;
        $('#cards').append(' <div  id="cards' + i + '"> <div class="card"> <!-- Card header --><div class="row "><div class="col-11 "><div class="card-header" role="tab" id="headingTwo2"><a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapsesub' + i + '"aria-expanded="false" aria-controls="collapseTwo2"><h5 class="mb-0">sub categories menu      <i class="fas fa-angle-down rotate-icon"></i></h5></a></div> </div><div class="col-1 "><button name="remove" id="' + i + '" class="subcat btn btn-danger btn-remove">X</button></div></div><!-- Card body --><div id="collapsesub' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">scId</label><input type="text" name="kickStartCollection[[subCategories]]   [[scId]]" id="scidsubin' + i + '"class="num  col-7 form-control" required >        <span id="scidsubin' + i + 'err" ></span></div><div class="form-group row"><label for="" class="col-form-label col-2">subCategory</label><input type="text" name="kickStartCollection[[subCategories]]   [[subCategory]]" id="subsubcat' + i + '" class="str  col-7  form-control"  required  ><span id="subsubcat' + i + 'err" ></span></div><div class="form-group row"><label for="" class="col-form-label col-2">releaseDate</label><input type="Date" name="kickStartCollection[[subCategories]]   [[releaseDate]]"  id="reldatesub' + i + '" class="dat col-7 form-control"required><span id="reldatesub' + i + 'err" ></span></div><div class="form-group row"><label for="" class="col-form-label col-2">subOrder</label><input type="text" name="kickStartCollection[[subCategories]]   [[subOrder]]"  id="subordsub' + i + '" class="num col-7 form-control"required><span id="subordsub' + i + 'err"></span></div></div></div></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="row "><div class="col-11 "><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapsekick' + i + '"aria-expanded="false" aria-controls="collapseThree3"><h5 class="mb-0">kick starts menu <i class="fas fa-angle-down rotate-icon"></i></h5></a></div></div><div class="col-1 "><button name="add" type="button" id="sudden' + i + '" class="btnadd btn btn-success">add</button> </div></div><!-- Card body --><div id="collapsekick' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx"><div class="card-body " id="3sub"><div class="form-group row"><label for="" class="col-form-label col-2">ksId</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksId]]" id="ksidsub' + i + '" class="num   col-7  form-control"required><span id="ksidsub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">ksName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksName]]" id="ksnamesub' + i + '" class="str   col-7  form-control"required><span id="ksnamesub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">isoFileName</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[isoFileName]]"  id="isofilesub' + i + '" class="iso   col-7  form-control"required><span id="isofilesub' + i + 'err"></span></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab"><a class="collapsed" data-toggle="collapse"  href="#collapsekicksub1' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">Docs <i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapsekicksub1' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub1"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">documentName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[docs]][[documentName]]" id="docnasub' + i + '" class="str col-7  form-control"required> <span id="docnasub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">fileName</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[docs]][[fileName]]"  id="filnasub' + i + '" class="str col-7  form-control"  required ><span id="filnasub' + i + 'err"></span></div></div></div></div><div class="form-group row"><label for="" class="col-form-label col-2">hashType</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hashType]]" id="hashtysub' + i + '"   class="str   col-7  form-control"required><span id="hashtysub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">hash</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hash]]" id="Hashsub' + i + '"   class="has col-7 form-control"required><span id="Hashsub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">hashFileName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hashFileName]]"  id="hashfisub' + i + '" class="str col-7 form-control"required><span id="hashfisub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">versionNo</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[versionNo]]"id="versnosub' + i + '" class="ver col-7 form-control" required><span id="versnosub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">createdDate</label><input type="Date" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[createdDate]]" id="credasub' + i + '"   class="dat   col-7  form-control" required><span id="credasub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">modifiedDate</label><input type="date" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[modifiedDate]]"id="moddatesub' + i + '"   class="dat   col-7  form-control" required><span id="moddatesub' + i + 'err"></span></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapsekicksub2' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">ossToolsUsed<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapsekicksub2' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub2"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">toolId</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[toolId]]" id="tolidsub' + i + '"class="num col-7 form-control"required><span id="tolidsub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[version]]" id="versiisub' + i + '"   class="ver col-7 form-control"required><span id="versiisub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">toolId</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[toolId]]" id="toolisub' + i + '" class="num col-7 form-control"required><span id="toolisub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[version]]"  id="versisub' + i + '"   class="ver col-7 form-control"required><span id="versisub' + i + 'err"></span></div></div></div></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapsekicksub3' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">otherToolsUsed<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapsekicksub3' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub3"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">toolName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[otherToolsUsed]][[toolName]]"id="ottoonasub' + i + '"class="str col-7  form-control"required><span id="ottoonasub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[otherToolsUsed]][[version]]"  id="otversub' + i + '" class="ver col-7 form-control"required><span id="otversub' + i + 'err"></span></div></div></div></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapsekicksub4' + i + '" aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">user applications<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapsekicksub4' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub4"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">application name</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[userApplications]][[applicationName]]" id="appnamsub' + i + '" class="str col-7  form-control"  required><span id="appnamsub' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[userApplications]][[version]]" id="appversub' + i + '"   class="ver col-7  form-control"  required><span id="appversub' + i + 'err"></span></div></div></div></div><br><div class="form-group row"><label for="" class="col-form-label col-2">ksorder</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksOrder]]" id="ksorsub' + i + '" class="num col-7 form-control"required><span id="ksorsub' + i + 'err"></span></div></div></div><div id="sudden' + i + '00" class="card"></div></div>');
    });

    $(document).on('click', '.subcat', function() {
        var butid = $(this).attr("id");
        $("#cards" + butid).remove();
    });

    $(document).on('click', '.btnadd', function() {
        var butid = $(this).attr("id");
        i++;
        $('#' + butid + '00').append(' <div  id="subcat' + i + '" class="card">  <div class="row "><div class="col-11 "><div class="card-header" role="tab" id="headingThree3"> <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThreekicksub' + i + '"  aria-expanded="false" aria-controls="collapseThree3"><h5 class="mb-0">kick starts menu <i class="fas fa-angle-down rotate-icon"></i> </h5></a></div></div><div class="col-1 "><button name="remove" id="' + i + '" class="subbtns btn btn-danger btn-remove">X</button></div></div><div id="collapseThreekicksub' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx"><div class="card-body " id="3sub"><div class="form-group row"><label for="" class="col-form-label col-2">ksId</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksId]]" id="ksid' + i + '" class="num col-7 form-control"  required   ><span id="ksid' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">ksName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksName]]"id="ksname' + i + '" class="str col-7 form-control" required><span id="ksname' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">isoFileName</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[isoFileName]]" id="isofile' + i + '" class="iso col-7 form-control"   required><span id="isofile' + i + 'err"></span> </div><div class="card"><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub1sub' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">Docs <i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub1sub' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub1"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">documentName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[docs]][[documentName]]" id="docna' + i + '" class="str col-7  form-control"required> <span id="docna' + i + 'err"></span>    </div><div class="form-group row"><label for="" class="col-form-label col-2">fileName</label><input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[docs]][[fileName]]"  id="filna' + i + '" class="str col-7  form-control"  required ><span id="filna' + i + 'err"></span> </div></div></div></div><div class="form-group row"><label for="" class="col-form-label col-2">hashType</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hashType]]" id="hashty' + i + '" class="str   col-7  form-control"required><span id="hashty' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">hash</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hash]]"  id="Hash' + i + '"   class="has col-7 form-control"required><span id="Hash' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">hashFileName</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[hashFileName]]"  id="hashfi' + i + '" class="str col-7 form-control"required><span id="hashfi' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">versionNo</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[versionNo]]" id="versno' + i + '" class="ver col-7 form-control" required><span id="versno' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">createdDate</label><input type="Date" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[createdDate]]"  id="creda' + i + '"   class="dat   col-7  form-control" required><span id="creda' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">modifiedDate</label><input type="date" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[modifiedDate]]"  id="moddate' + i + '"   class="dat   col-7  form-control" required><span id="moddate' + i + 'err"></span></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub2sub' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">ossToolsUsed<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub2sub' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub2"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">toolId</label>  <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[toolId]]" id="tolid' + i + '"class="num col-7 form-control"required><span id="tolid' + i + 'err"></span>   </div><div class="form-group row"><label for="" class="col-form-label col-2">version</label>                     <input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[version]]"  id="versii' + i + '"   class="ver col-7 form-control"required><span id="versii' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">toolId</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[toolId]]" id="tooli' + i + '"   class="num col-7 form-control"required><span id="tooli' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label>        <input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ossToolsUsed]][[version]]"  id="versi' + i + '"   class="ver col-7 form-control"required><span id="versi' + i + 'err"></span></div></div></div></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3' + i + '"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub3sub' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">otherToolsUsed<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub3sub' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub3"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">toolName</label> <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[otherToolsUsed]][[toolName]]" id="ottoona' + i + '"class="str col-7  form-control"required><span id="ottoona' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label>  <input type="" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[otherToolsUsed]][[version]]"  id="otver' + i + '" class="ver col-7 form-control"required><span id="otver' + i + 'err"></span></div></div></div></div><!-- Accordion card --><div class="card"><!-- Card header --><div class="card-header" role="tab" id="headingThree3"><a class="collapsed" data-toggle="collapse"  href="#collapseThree3sub4sub' + i + '"aria-expanded="false" aria-controls="collapseThree3sub"><h5 class="mb-0">user applications<i class="fas fa-angle-down rotate-icon"></i></h5></a></div><!-- Card body --><div id="collapseThree3sub4sub' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#collapseThree3sub4"><div class="card-body"><div class="form-group row"><label for="" class="col-form-label col-2">application name</label>    <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[userApplications]][[applicationName]]" id="appnam' + i + '" class="str col-7  form-control"  required><span id="appnam' + i + 'err"></span></div><div class="form-group row"><label for="" class="col-form-label col-2">version</label><input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[userApplications]][[version]]"  id="appver' + i + '"   class="ver col-7  form-control"  required><span id="appver' + i + 'err"></span></div></div></div></div><br><div class="form-group row"><label for="" class="col-form-label col-2">ksorder</label>  <input type="text" name="kickStartCollection[[subCategories]]   [[kickStarts]] [[ksOrder]]"  id="ksor' + i + '" class="num col-7 form-control"required><span id="ksor' + i + 'err"></span></div></div></div></div>                  ');

    });

    $(document).on('click', '.subbtns', function() {
        var butid = $(this).attr("id");
        $("#subcat" + butid).remove();
    });

});