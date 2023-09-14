const array_from_db = {
    id: 1, title: 'Container Styles', blokes: [
        {
            'title': 'test 1',
            'style': {
                'no_mobile': 'yes',
                'no_desktop': 'no',
                'el_class': 'row',
                'el_id': 'id_te',
                'width': '10px',
                'height': '40px',
                'padding': '20px',
                'margin': '',
                'z_index': '',
                'transform': '',
                'font_size': '',
                'text_align': 'left',
                'text_shadow': '',
                'position': 'fixed',
                'left': '',
                'top': '',
                'floating': 'left',
                'overflow': 'scroll',
                'box_shadow': '',
                'b_radius': '',
                'b_top': '',
                'b_right': '',
                'b_bottom': '',
                'b_left': '',
                'color': '',
                'color_opacity': '100%',
                'use_bg_color': 'yes',
                'bg_c': '',
                'bg_color_opacity': '100%',
                'paralax': '',
                'image': '',
                'bg_url': '',
                'el_pg_link': '',
                'el_url_link': '',
                'new_tab': '',
                'live': '',
                'anim_set': '',
                'hover_styling': '',
                'css_code': '',
                'h_use_bg_color': 'yes',
                'h_bg_color_opacity' : '100%',
                'timefn' : 'linear',
                'h_color_opacity' : '90%'
            }
        },
        {
            'title': 'test 2',
            'style': {
                'no_mobile': 'yes',
                'no_desktop': 'no',
                'el_class': 'row',
                'el_id': 'id_te',
                'width': '10px',
                'height': '40px',
                'padding': '20px',
                'margin': '',
                'z_index': '',
                'transform': '',
                'font_size': '',
                'text_align': 'left',
                'text_shadow': '',
                'position': 'fixed',
                'left': '',
                'top': '',
                'floating': 'left',
                'overflow': 'scroll',
                'box_shadow': '',
                'b_radius': '',
                'b_top': '',
                'b_right': '',
                'b_bottom': '',
                'b_left': '',
                'color': '',
                'color_opacity': '50%',
                'use_bg_color': 'yes',
                'bg_c': '',
                'bg_color_opacity': '40%',
                'paralax': '',
                'image': '',
                'bg_url': '',
                'el_pg_link': '',
                'el_url_link': '',
                'new_tab': '',
                'live': '',
                'anim_set': '',
                'hover_styling': '',
                'css_code': '',
                'h_use_bg_color': 'no',
                'h_bg_color_opacity' : '30%',
                'timefn' : 'linear',
                'h_color_opacity' : '90%'
            }
        }
    ]
};
document.getElementById('page_title').innerText = array_from_db.title
for (let i = 0; i < array_from_db.blokes.length; i++) {
    temp = `
        <div class="field" d_cp="row_style">
            <label class="field__label" title="click here to modify the settings/styles"
                style="font-weight: 600; margin: 0px auto; padding: 0.1em 0.3em; cursor: pointer; border-bottom: 1px dotted var(--m_c, var(--primary)); border-radius: 5px;">
                `+ array_from_db.blokes[i].title + `
            </label>

            <div class="styling_config tab_row_style row_style flex">
                <div class="field " d_cp="no_mobile">
                <label class="field__label" for="maino-`+ i + `-value-row_style-no_mobile">No Mobile</label>
                    <div class="field boolean_field no_mobile">
                        <input type="checkbox" name="maino-`+ i + `-value-row_style-no_mobile"
                            id="maino-`+ i + `-value-row_style-no_mobile" >
                    </div>
                </div>
            </div>
            <div class="styling_config tab_row_style row_style flex">
                <div class="field " d_cp="no_desktop">
                <label class="field__label" for="maino-`+ i + `-value-row_style-no_desktop">No Desktop</label>
                    <div class="field boolean_field no_desktop">
                        <input type="checkbox" name="maino-`+ i + `-value-row_style-no_desktop"
                                id="maino-`+ i + `-value-row_style-no_desktop" >
                    </div>
                </div>
            <div>

            <div class="field " d_cp="el_class"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-el_class">Class</label>
                <div class="field char_field el_class">
                    <input type="text" name="maino-`+ i + `-value-row_style-el_class"
                        value="`+ array_from_db.blokes[i].style.el_class + `"
                        maxlength="800" id="maino-`+ i + `-value-row_style-el_class">
                </div>
            </div>

            <div class="field " d_cp="el_id"><label class="field__label" for="maino-`+ i + `-value-row_style-el_id">ID</label>
                <div class="field char_field el_id">
                    <input type="text" name="maino-`+ i + `-value-row_style-el_id" maxlength="800"
                    value="`+ array_from_db.blokes[i].style.el_id + `"
                        id="maino-`+ i + `-value-row_style-el_id">
                    <p class="help">....</p>
                </div>
            </div>
            
            <div class="field " d_cp="width"><label class="field__label" for="maino-`+ i + `-value-row_style-width">Width
                </label>
                <div class="field char_field width">
                    <input type="text" name="maino-`+ i + `-value-row_style-width" maxlength="28"
                    value="`+ array_from_db.blokes[i].style.width + `"
                        id="maino-`+ i + `-value-row_style-width">
                    <p class="help"> px, em, rem or % </p>
                </div>
            </div>

            <div class="field " d_cp="height"><label class="field__label" for="maino-`+ i + `-value-row_style-height">Height
                </label>
                <div class="field char_field height">
                    <input type="text" name="maino-`+ i + `-value-row_style-height" maxlength="28"
                    value="`+ array_from_db.blokes[i].style.height + `"
                        id="maino-`+ i + `-value-row_style-height">
                    <p class="help"> px, em, rem or % </p>
                </div>
            </div>

            <div class="field " d_cp="padding"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-padding">Padding</label>
                <div class="field char_field padding">
                    <input type="text" name="maino-`+ i + `-value-row_style-padding"
                    value="`+ array_from_db.blokes[i].style.padding + `"
                        maxlength="28" id="maino-`+ i + `-value-row_style-padding">
                    <p class="help">clockwise(top right bottom left) px, rem or % </p>
                </div>
            </div>


            <div class="field " d_cp="margin"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-margin">Margin</label>
                <div class="field char_field margin">
                    <input type="text" name="maino-`+ i + `-value-row_style-margin" maxlength="28"
                    value="`+ array_from_db.blokes[i].style.margin + `"
                        id="maino-`+ i + `-value-row_style-margin">
                    <p class="help">clockwise(top right bottom left) px, rem or % </p>
                </div>
            </div>


            <div class="field " d_cp="z_index"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-z_index">z-index</label>
                <div class="field char_field z_index">
                    <input type="text" name="maino-`+ i + `-value-row_style-z_index"
                    value="`+ array_from_db.blokes[i].style.z_index + `"
                        maxlength="800" id="maino-`+ i + `-value-row_style-z_index">
                    <p class="help">depth (layer ordering)</p>
                </div>
            </div>


            <div class="field " d_cp="transform"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-transform">Transform</label>
                <div class="field char_field transform">
                    <input type="text" name="maino-`+ i + `-value-row_style-transform"
                    value="`+ array_from_db.blokes[i].style.transform + `"
                        maxlength="50" id="maino-`+ i + `-value-row_style-transform">
                    <p class="help">ex: rotateZ(90deg)</p>
                </div>
            </div>

            <div class="field " d_cp="font_size"><label class="field__label" for="maino-`+ i + `-value-row_style-font_size">Font
                    Size</label>
                <div class="field char_field font_size">
                    <input type="text" name="maino-`+ i + `-value-row_style-font_size"
                    value="`+ array_from_db.blokes[i].style.font_size + `"
                        maxlength="28" id="maino-`+ i + `-value-row_style-font_size">
                    <p class="help"> px, em, rem or % </p>
                </div>
            </div>


            <div class="field " d_cp="text_align"><label class="field__label" for="maino-`+ i + `-value-row_style-text_align">text
                    align</label>
                <div class="field choice_field text_align">
                    <select name="maino-`+ i + `-value-row_style-text_align" id="maino-` + i + `-value-row_style-text_align">
                        <option value="`+ array_from_db.blokes[i].style.text_align + `" selected="">` + array_from_db.blokes[i].style.text_align + `</option>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                        <option value="justify">Justify</option>
                    </select>
                    <p class="help">left, right or center</p>
                </div>
            </div>

            <div class="field " d_cp="text_shadow"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-text_shadow">text Shadow</label>
                <div class="field char_field text_shadow">
                    <input type="text" name="maino-`+ i + `-value-row_style-text_shadow"
                    value="`+ array_from_db.blokes[i].style.text_shadow + `"
                        maxlength="150" id="maino-`+ i + `-value-row_style-text_shadow">
                    <p class="help">example: 1px 1px 2px white, 2px 2px 4px grey</p>
                </div>
            </div>


            <div class="field " d_cp="position"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-position">Position</label>
                <div class="field choice_field position">
                    <select name="maino-`+ i + `-value-row_style-position" id="maino-` + i + `-value-row_style-position">
                        <option value="`+ array_from_db.blokes[i].style.position + `" selected="">` + array_from_db.blokes[i].style.position + `</option>
                        <option value="absolute">Absolute</option>
                        <option value="fixed">Fixed</option>
                        <option value="inherit">Inherit</option>
                        <option value="initial">Initial</option>
                        <option value="relative">Relative</option>
                        <option value="revert">Revert</option>
                        <option value="static">Static</option>
                        <option value="sticky">Sticky</option>
                        <option value="unset">Unset</option>
                    </select>
                    <p class="help">. . . . .</p>
                </div>
            </div>


            <div class="field " d_cp="left"><label class="field__label" for="maino-`+ i + `-value-row_style-left">left
                    Position</label>
                <div class="field char_field left">
                    <input type="text" name="maino-`+ i + `-value-row_style-left" maxlength="28"
                    value="`+ array_from_db.blokes[i].style.left + `"
                        id="maino-`+ i + `-value-row_style-left">
                    <p class="help"> px, em, rem or % </p>
                </div>
            </div>

            <div class="field " d_cp="top"><label class="field__label" for="maino-`+ i + `-value-row_style-top">top
                    Position</label>
                <div class="field char_field top">
                    <input type="text" name="maino-`+ i + `-value-row_style-top" maxlength="28"
                    value="`+ array_from_db.blokes[i].style.top + `"
                        id="maino-`+ i + `-value-row_style-top">
                    <p class="help"> px, em, rem or % </p>
                </div>
            </div>


            <div class="field " d_cp="floating"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-floating">Floating</label>
                <div class="field choice_field floating">
                    <select name="maino-`+ i + `-value-row_style-floating" id="maino-` + i + `-value-row_style-floating">
                        <option value="`+ array_from_db.blokes[i].style.floating + `" selected="">` + array_from_db.blokes[i].style.floating + `</option>
                        <option value="left">Left</option>
                        <option value="none">None(Default)</option>
                        <option value="right">Right</option>
                    </select>
                    <p class="help">left or right</p>
                </div>
            </div>
            <div class="field " d_cp="overflow"><label class="field__label" for="maino-`+ i + `-value-row_style-overflow">Overflow
                </label>
                <div class="field choice_field overflow">
                    <select name="maino-`+ i + `-value-row_style-overflow" id="maino-` + i + `-value-row_style-overflow">
                        <option value="`+ array_from_db.blokes[i].style.overflow + `" selected="">` + array_from_db.blokes[i].style.overflow + `</option>
                        <option value="auto">Auto Default</option>
                        <option value="scroll">Scroll</option>
                        <option value="visible">Visible</option>
                        <option value="hidden">Hidden</option>
                        <option value="inherit">Inherit</option>
                        <option value="initial">Initial</option>
                        <option value="overlay">Overlay</option>
                        <option value="revert">Revert</option>
                        <option value="unset">Unset</option>
                    </select>
                    <p class="help">....</p>
                </div>
            </div>


            <div class="field " d_cp="box_shadow"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-box_shadow">box-shadow </label>
                <div class="field char_field box_shadow">
                    <input type="text" name="maino-`+ i + `-value-row_style-box_shadow"
                    value="`+ array_from_db.blokes[i].style.box_shadow + `"
                        maxlength="180" id="maino-`+ i + `-value-row_style-box_shadow">
                    <p class="help">ex: 0px 0px 1px red % </p>
                </div>
            </div>


            <div class="field " d_cp="b_radius"><label class="field__label" for="maino-`+ i + `-value-row_style-b_radius">Corner
                    Radius</label>
                <div class="field char_field b_radius">
                    <input type="text" name="maino-`+ i + `-value-row_style-b_radius"
                    value="`+ array_from_db.blokes[i].style.b_radius + `"
                        maxlength="60" id="maino-`+ i + `-value-row_style-b_radius">
                    <p class="help">Border Raidus Example: 50%</p>
                </div>
            </div>


            <div class="field " d_cp="b_top"><label class="field__label" for="maino-`+ i + `-value-row_style-b_top">Top
                    Border</label>
                <div class="field char_field b_top">
                    <input type="text" name="maino-`+ i + `-value-row_style-b_top" maxlength="60"
                    value="`+ array_from_db.blokes[i].style.b_top + `"
                        id="maino-`+ i + `-value-row_style-b_top">
                    <p class="help">Example: 1rem Solid red</p>
                </div>
            </div>


            <div class="field " d_cp="b_right"><label class="field__label" for="maino-`+ i + `-value-row_style-b_right">Right
                    Border</label>
                <div class="field char_field b_right"><input type="text" name="maino-`+ i + `-value-row_style-b_right"
                    value="`+ array_from_db.blokes[i].style.b_right + `"
                        maxlength="60" id="maino-`+ i + `-value-row_style-b_right">
                    <p class="help">Example: 1rem Solid red</p>
                </div>
            </div>


            <div class="field " d_cp="b_bottom"><label class="field__label" for="maino-`+ i + `-value-row_style-b_bottom">Bottom
                    Border</label>
                <div class="field char_field b_bottom"><input type="text" name="maino-`+ i + `-value-row_style-b_bottom"
                    value="`+ array_from_db.blokes[i].style.b_bottom + `"
                        maxlength="60" id="maino-`+ i + `-value-row_style-b_bottom">
                    <p class="help">Example: 1rem Solid red</p>
                </div>
            </div>
            <div class="field " d_cp="b_left"><label class="field__label" for="maino-`+ i + `-value-row_style-b_left">Left
                    Border</label>
                <div class="field char_field b_left"><input type="text" name="maino-`+ i + `-value-row_style-b_left" maxlength="60"
                    value="`+ array_from_db.blokes[i].style.b_left + `"
                        id="maino-`+ i + `-value-row_style-b_left">
                    <p class="help">Example: 1rem Solid red</p>
                </div>
            </div>


            <div class="field " d_cp="color"><label class="field__label" for="maino-`+ i + `-value-row_style-color">Text Color
                </label>
                <div class="field char_field color"><input type="color" name="maino-`+ i + `-value-row_style-color" maxlength="28"
                    value="`+ array_from_db.blokes[i].style.color + `"
                        id="maino-`+ i + `-value-row_style-color">
                    <p class="help">....</p>
                </div>
            </div>
            <div class="field " d_cp="color_opacity"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-color_opacity">Color Opacity</label>
                <div class="field choice_field color_opacity">
                    <select name="maino-`+ i + `-value-row_style-color_opacity" id="maino-` + i + `-value-row_style-color_opacity">
                        <option value="`+ array_from_db.blokes[i].style.color_opacity + `" selected="">` + array_from_db.blokes[i].style.color_opacity + `</option>
                        <option value="FF">100%</option>
                        <option value="E6">90%</option>
                        <option value="CC">80%</option>
                        <option value="B3">70%</option>
                        <option value="99">60%</option>
                        <option value="80">50%</option>
                        <option value="66">40%</option>
                        <option value="4D">30%</option>
                        <option value="33">20%</option>
                        <option value="1A">10%</option>
                        <option value="03">01%</option>
                    </select>
                    <p class="help">. . . . . .</p>
                </div>
            </div>


            <div class="field " d_cp="use_bg_color"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-use_bg_color">Use</label>
                <div class="field boolean_field use_bg_color">
                <input type="checkbox"
                        name="maino-`+ i + `-value-row_style-use_bg_color" id="maino-` + i + `-value-row_style-use_bg_color">
                    <p class="help">Use Background color</p>
                </div>
            </div>


            <div class="field " d_cp="bg_c"><label class="field__label" for="maino-`+ i + `-value-row_style-bg_c">BG-Color
                </label>
                <div class="field char_field bg_c"><input type="color" name="maino-`+ i + `-value-row_style-bg_c" maxlength="28"
                    value="`+ array_from_db.blokes[i].style.bg_c + `"
                        id="maino-`+ i + `-value-row_style-bg_c">
                    <p class="help">Background Color </p>
                </div>
            </div>


            <div class="field " d_cp="bg_color_opacity"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-bg_color_opacity">BG-Color Opacity</label>
                <div class="field choice_field bg_color_opacity">
                    <select name="maino-`+ i + `-value-row_style-bg_color_opacity" id="maino-` + i + `-value-row_style-bg_color_opacity">
                        <option value="`+ array_from_db.blokes[i].style.bg_color_opacity + `" selected="">` + array_from_db.blokes[i].style.bg_color_opacity + `</option>
                        <option value="FF">100%</option>
                        <option value="E6">90%</option>
                        <option value="CC">80%</option>
                        <option value="B3">70%</option>
                        <option value="99">60%</option>
                        <option value="80">50%</option>
                        <option value="66">40%</option>
                        <option value="4D">30%</option>
                        <option value="33">20%</option>
                        <option value="1A">10%</option>
                        <option value="03">01%</option>
                    </select>
                    <p class="help">. . . . . .</p>
                </div>
            </div>


            <div class="field " d_cp="paralax"><label class="field__label" for="maino-`+ i + `-value-row_style-paralax">Paralaxed
                    BG</label>
                <div class="field boolean_field paralax">
                <input type="checkbox" name="maino-`+ i + `-value-row_style-paralax"
                        id="maino-`+ i + `-value-row_style-paralax"></div>
            </div>

            <div class="field " d_cp="image">
                <label class="field__label">BG Image</label>
                <div class="field model_choice_field image">
                    <div id="maino-`+ i + `-value-row_style-image-chooser" class="chooser p image-chooser blank"
                        data-chooser-url="/console/images/chooser/">
                        <div class="chosen">
                            <div class="preview-image">
                                <img alt="" class="show-transparency" height="" src="" title="" width="" aria-label="">
                            </div>
                            <div class="actions">
                                <button type="button" class="button action-clear">Clear</button>
                                <button type="button" class="button action-choose">Replace it</button>
                                <a href="" class="edit-link button" target="_blank" rel="noopener noreferrer">Edit</a>
                            </div>
                        </div>

                        <div class="unchosen">
                            <button type="button" class="button action-choose">Choose</button>
                        </div>
                    </div>
                    <input type="hidden" name="maino-`+ i + `-value-row_style-image" id="maino-` + i + `-value-row_style-image" value="">
                </div>
            </div>

            <div class="field " d_cp="bg_url"><label class="field__label" for="maino-`+ i + `-value-row_style-bg_url">BG IMG
                    URL</label>
                <div class="field char_field bg_url"><input type="text" name="maino-`+ i + `-value-row_style-bg_url"
                    value="`+ array_from_db.blokes[i].style.bg_url + `"
                        maxlength="5000" id="maino-`+ i + `-value-row_style-bg_url"></div>
            </div>


            <div class="field " d_cp="el_pg_link"><label class="field__label">Page Link</label>
                <div class="field model_choice_field el_pg_link">
                    <div id="maino-`+ i + `-value-row_style-el_pg_link-chooser" class="chooser p page-chooser blank"
                        data-chooser-url="/console/choose-page/">
                        <div class="chosen">
                            <span class="title"></span>
                            <div class="actions">
                                <button type="button" class="button action-clear">Clear</button>
                                <button type="button" class="button action-choose">Choose another page</button>
                                <a href="" class="edit-link button" target="_blank" rel="noopener noreferrer">Edit this
                                    page</a>
                            </div>
                        </div>

                        <div class="unchosen">
                            <button type="button" class="button action-choose">Choose a page</button>
                        </div>
                    </div>
                    <input type="hidden" name="maino-`+ i + `-value-row_style-el_pg_link" id="maino-` + i + `-value-row_style-el_pg_link"
                        value="">
                    <p class="help">Link this element to a local page</p>
                </div>
            </div>


            <div class="field " d_cp="el_url_link"><label class="field__label"
                    for="maino-`+ i + `-value-row_style-el_url_link">External URL</label>
                <div class="field char_field el_url_link"><input type="text" name="maino-`+ i + `-value-row_style-el_url_link"
                    value="`+ array_from_db.blokes[i].style.el_url_link + `"
                        maxlength="800" id="maino-`+ i + `-value-row_style-el_url_link">
                    <p class="help">Link this element to another website</p>
                </div>
            </div>



            <div class="field " d_cp="new_tab"><label class="field__label" for="maino-`+ i + `-value-row_style-new_tab">New
                    Tab</label>
                <div class="field boolean_field new_tab"><input type="checkbox" name="maino-`+ i + `-value-row_style-new_tab"
                        id="maino-`+ i + `-value-row_style-new_tab">
                    <p class="help">Check here to open the link in a New Tab</p>
                </div>
            </div>


            <div class="field " d_cp="live"><label class="field__label">Scheduling(appearing/disappearing
                    period)</label>
                <div class="struct-block scheduling_property">
                    <div class="field " d_cp="s_at"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-live-s_at">Appear at</label>
                        <div class="field char_field s_at start_at"><input type="datetime-local"
                                name="maino-`+ i + `-value-row_style-live-s_at" id="maino-` + i + `-value-row_style-live-s_at">
                            <p class="help"> This element/block will be displayed starting from this date/time
                            </p>
                        </div>
                    </div>
                    <div class="field " d_cp="e_at"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-live-e_at">Disappear at</label>
                        <div class="field char_field e_at end_at"><input type="datetime-local"
                                name="maino-`+ i + `-value-row_style-live-e_at" id="maino-` + i + `-value-row_style-live-e_at">
                            <p class="help"> This element/block will be disappearing at this date/time</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="field " d_cp="anim_set"><label class="field__label">Animation Settings</label>
                <div class="structblock anim_set">
                    <div class="field " d_cp="duration"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-anim_set-duration">Duration</label>
                        <div class="field char_field duration a2zdur"><input type="text"
                                name="maino-`+ i + `-value-row_style-anim_set-duration" maxlength="6"
                                id="maino-`+ i + `-value-row_style-anim_set-duration">
                            <p class="help">options are increased by 200 Miliseconds(0, 200, ..., 6000)</p>
                        </div>
                    </div>
                    <div class="field " d_cp="delay"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-anim_set-delay">Delay</label>
                        <div class="field char_field delay a2zdel"><input type="text"
                                name="maino-`+ i + `-value-row_style-anim_set-delay" maxlength="6"
                                id="maino-`+ i + `-value-row_style-anim_set-delay">
                            <p class="help">options are increased by 200 Miliseconds(0, 200, ..., 6000)</p>
                        </div>
                    </div>
                    <div class="field " d_cp="behaviour"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-anim_set-behaviour">Behaviour</label>
                        <div class="field choice_field behaviour a2zbeh">
                            <select name="maino-`+ i + `-value-row_style-anim_set-behaviour"
                                id="maino-`+ i + `-value-row_style-anim_set-behaviour">
                                <option value="`+ array_from_db.blokes[i].style.behaviour + `" selected="">` + array_from_db.blokes[i].style.behaviour + `</option>
                                <option value="a2zfadeup">fade-up</option>
                                <option value="a2zfadedown">fade-down</option>
                                <option value="a2zfaderight">fade-right</option>
                                <option value="a2zfadeleft">fade-left</option>
                                <option value="a2zfadeupright">fadeup-right</option>
                                <option value="a2zfadeupleft">fade-up-left</option>
                                <option value="a2zfadedownright">fade-down-right</option>
                                <option value="a2zfadedownleft">fade-down-left</option>
                                <option value="a2zzoomin">zoomin</option>
                                <option value="a2zzoominup">zoom-in-up</option>
                                <option value="a2zzoominown">zoom-in-down</option>
                                <option value="a2zzoominright">zoom-in-right</option>
                                <option value="a2zzoominleft">zoom-in-left</option>
                                <option value="a2zzoomout">zoom-out</option>
                                <option value="a2zzoomoutup">zoom-out-up</option>
                                <option value="a2zzoomoutdown">zoom-out-down</option>
                                <option value="a2zzoomoutright">zoom-out-right</option>
                                <option value="a2zzoomoutleft">zoom-out-left</option>
                                <option value="a2zzoomoutright">zoom-out-right</option>
                                <option value="a2zslideup">slide-up</option>
                                <option value="a2zslidedown">slide-down</option>
                                <option value="a2zslideright">slide-right</option>
                                <option value="a2zslideleft">slide-left</option>
                                <option value="a2zflipup">flip-up</option>
                                <option value="a2zflipdown">flip-down</option>
                                <option value="a2zflipright">flip-right</option>
                                <option value="a2zflipleft">flip-left</option>
                                <option value="a2zflipupright">flipup-right</option>
                            </select>
                            <p class="help">Select the animation behaviour</p>
                        </div>
                    </div>
                    <div class="field " d_cp="timefn"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-anim_set-timefn">Timing Function</label>
                        <div class="field choice_field timefn a2zbeh">
                            <select name="maino-`+ i + `-value-row_style-anim_set-timefn"
                                id="maino-`+ i + `-value-row_style-anim_set-timefn">
                                <option value="`+ array_from_db.blokes[i].style.timefn + `" selected="">` + array_from_db.blokes[i].style.timefn + `</option>
                                <option value="a2zlinear">linear</option>
                                <option value="a2zease">ease</option>
                                <option value="a2zeasein">easein</option>
                                <option value="a2zeaseout">easeout</option>
                                <option value="a2zeaseinout">easeinout</option>
                                <option value="a2zeaseinback">easeinback</option>
                                <option value="a2zeaseoutback">easeoutback</option>
                                <option value="a2zeaseinoutback">easeinoutback</option>
                                <option value="a2zeaseinsine">easeinsine</option>
                                <option value="a2zeaseoutsine">easeoutsine</option>
                                <option value="a2zeaseinoutsine">easeinoutsine</option>
                                <option value="a2zeaseinquad">easeinquad</option>
                                <option value="a2zeaseoutquad">easeoutquad</option>
                                <option value="a2zeaseinoutquad">easeinoutquad</option>
                                <option value="a2zeaseincubic">easeincubic</option>
                                <option value="a2zeaseoutcubic">easeoutcubic</option>
                                <option value="a2zeaseinoutcubic">easeinoutcubic</option>
                                <option value="a2zeaseinquart">easeinquart</option>
                                <option value="a2zeaseoutquart">easeoutquart</option>
                                <option value="a2zeaseinoutquart">easeinoutquart</option>
                            </select>
                            <p class="help">Select the timing function</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field " d_cp="hover_styling"><label class="field__label">Hover Styling</label>
                <div class="hover_styling_config element_hover_style">
                    <div class="field " d_cp="title"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-title">Hover Text(infotip) </label>
                        <div class="field char_field title infotip"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-title" maxlength="580"
                                id="maino-`+ i + `-value-row_style-hover_styling-title">
                            <p class="help"> when visitor hovers on this element, this text will be shown as an
                                infotip
                            </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_width"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_width">Width </label>
                        <div class="field char_field h_width h_width"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_width" maxlength="28"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_width">
                            <p class="help"> px, em, rem or % </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_height"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_height">Height </label>
                        <div class="field char_field h_height"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_height" maxlength="28"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_height">
                            <p class="help"> px, em, rem or % </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_padding"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_padding">Padding</label>
                        <div class="field char_field h_padding"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_padding" maxlength="28"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_padding">
                            <p class="help">clockwise(top right bottom left) px, rem or % </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_margin"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_margin">Margin</label>
                        <div class="field char_field h_margin"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_margin" maxlength="28"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_margin">
                            <p class="help">clockwise(top right bottom left) px, rem or % </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_font_size"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_font_size">Font Size</label>
                        <div class="field char_field h_font_size"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_font_size" maxlength="28"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_font_size">
                            <p class="help"> px, em, rem or % </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_box_shadow"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_box_shadow">box-shadow </label>
                        <div class="field char_field h_box_shadow"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_box_shadow" maxlength="180"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_box_shadow">
                            <p class="help">ex: 0px 0px 1px red % </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_b_radius"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_b_radius">Corner Radius</label>
                        <div class="field char_field h_b_radius"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_b_radius" maxlength="60"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_b_radius">
                            <p class="help">Example: 1rem Solid red</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_b_top"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_b_top">Top Border</label>
                        <div class="field char_field h_b_top"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_b_top" maxlength="60"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_b_top">
                            <p class="help">Example: 1rem Solid red</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_b_right"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_b_right">Right Border</label>
                        <div class="field char_field h_b_right"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_b_right" maxlength="60"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_b_right">
                            <p class="help">Example: 1rem Solid red</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_b_bottom"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_b_bottom">Bottom Border</label>
                        <div class="field char_field h_b_bottom"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_b_bottom" maxlength="60"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_b_bottom">
                            <p class="help">Example: 1rem Solid red</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_b_left"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_b_left">Left Border</label>
                        <div class="field char_field h_b_left"><input type="text"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_b_left" maxlength="60"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_b_left">
                            <p class="help">Example: 1rem Solid red</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_color"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_color">Text Color </label>
                        <div class="field char_field h_color"><input type="color"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_color" maxlength="28"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_color">
                            <p class="help">....</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_color_opacity"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_color_opacity">Color Opacity</label>
                        <div class="field choice_field h_color_opacity">
                            <select name="maino-`+ i + `-value-row_style-hover_styling-h_color_opacity"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_color_opacity">
                                <option value="`+ array_from_db.blokes[i].style.h_color_opacity + `" selected="">` + array_from_db.blokes[i].style.h_color_opacity + `</option>
                                <option value="FF">100%</option>
                                <option value="E6">90%</option>
                                <option value="CC">80%</option>
                                <option value="B3">70%</option>
                                <option value="99">60%</option>
                                <option value="80">50%</option>
                                <option value="66">40%</option>
                                <option value="4D">30%</option>
                                <option value="33">20%</option>
                                <option value="1A">10%</option>
                                <option value="03">01%</option>
                            </select>
                            <p class="help">. . . . . .</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_use_bg_color"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_use_bg_color">Use</label>
                        <div class="field boolean_field h_use_bg_color"><input type="checkbox"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_use_bg_color"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_use_bg_color">
                            <p class="help">Use bg color</p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_bg_c"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_bg_c">BG-Color </label>
                        <div class="field char_field h_bg_c"><input type="color"
                                name="maino-`+ i + `-value-row_style-hover_styling-h_bg_c" maxlength="28"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_bg_c">
                            <p class="help">Background Color </p>
                        </div>
                    </div>
                    <div class="field " d_cp="h_bg_color_opacity"><label class="field__label"
                            for="maino-`+ i + `-value-row_style-hover_styling-h_bg_color_opacity">BG Color
                            Opacity</label>
                        <div class="field choice_field h_bg_color_opacity">
                            <select name="maino-`+ i + `-value-row_style-hover_styling-h_bg_color_opacity"
                                id="maino-`+ i + `-value-row_style-hover_styling-h_bg_color_opacity">
                                <option value="`+ array_from_db.blokes[i].style.h_bg_color_opacity + `" selected="">` + array_from_db.blokes[i].style.h_bg_color_opacity + `</option>
                                <option value="FF">100%</option>
                                <option value="E6">90%</option>
                                <option value="CC">80%</option>
                                <option value="B3">70%</option>
                                <option value="99">60%</option>
                                <option value="80">50%</option>
                                <option value="66">40%</option>
                                <option value="4D">30%</option>
                                <option value="33">20%</option>
                                <option value="1A">10%</option>
                                <option value="03">01%</option>

                            </select>
                            <p class="help">. . . . . .</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field " d_cp="css_code"><label class="field__label" for="maino-`+ i + `-value-row_style-css_code">CSS
                    Code</label>
                <div class="field char_field css_code"><textarea name="maino-`+ i + `-value-row_style-css_code" cols="40" rows="1"
                        id="maino-`+ i + `-value-row_style-css_code" data-autosize-on="true"
                        style="overflow: hidden; overflow-wrap: break-word; resize: horizontal; height: 23.6px;"></textarea>

                    <p class="help">Custom CSS Code for this element/block</p>
                </div>
            </div>

        </div>

        <button type="button" id='maino-`+ i + `-button-save' onclick="myScript(` + i + `)">Save</button>
        <hr>
    `
    document.getElementById('wapper_blokes').innerHTML += temp

    checkBox(i, array_from_db.blokes[i].style.no_mobile, 'no_mobile', '-value-row_style-')
    checkBox(i, array_from_db.blokes[i].style.no_desktop, 'no_desktop', '-value-row_style-')
    checkBox(i, array_from_db.blokes[i].style.use_bg_color, 'use_bg_color', '-value-row_style-')
    checkBox(i, array_from_db.blokes[i].style.paralax, 'paralax', '-value-row_style-')
    checkBox(i, array_from_db.blokes[i].style.new_tab, 'new_tab', '-value-row_style-')
    checkBox(i, array_from_db.blokes[i].style.h_use_bg_color, 'h_use_bg_color', '-value-row_style-hover_styling-')
}

function myScript(index) {
    if (validation([
        validateValueNumberSize(getValue('maino-' + index + '-value-row_style-width')),
        validateValueNumberSize(getValue('maino-' + index + '-value-row_style-height')),
        validateValueNumberSize(getValue('maino-' + index + '-value-row_style-padding')),
        validateValueNumberSize(getValue('maino-' + index + '-value-row_style-margin')),
        validateValueNumberSize(getValue('maino-' + index + '-value-row_style-font_size')),
        validateValueNumberSize(getValue('maino-' + index + '-value-row_style-left')),
        validateValueNumberSize(getValue('maino-' + index + '-value-row_style-top'))
    ])){
        console.log(getBloke(index))
    }
}

function checkBox(i, val, name, id) {
    if (val == 'yes') {
        document.getElementById("maino-" + i + id + name).setAttribute('checked', 'checked');
    } else {
        document.getElementById("maino-" + i + id + name).removeAttribute('checked');
    }
}

function getCheckBox(id) {
    if (document.getElementById(id).checked)
        return 'yes'
    else
        return 'no'
}

function getValue(id) {
    return document.getElementById(id).value
}

function getBloke(index) {
    return {
        'no_mobile': getCheckBox('maino-' + index + '-value-row_style-no_mobile'),
        'no_desktop': getCheckBox('maino-' + index + '-value-row_style-no_desktop'),
        'el_class': getValue('maino-' + index + '-value-row_style-el_class'),
        'el_id': getValue('maino-' + index + '-value-row_style-el_id'),
        'width': getValue('maino-' + index + '-value-row_style-width'),
        'height': getValue('maino-' + index + '-value-row_style-height'),
        'padding': getValue('maino-' + index + '-value-row_style-padding'),
        'margin': getValue('maino-' + index + '-value-row_style-margin'),
        'z_index': getValue('maino-' + index + '-value-row_style-z_index'),
        'transform': getValue('maino-' + index + '-value-row_style-transform'),
        'font_size': getValue('maino-' + index + '-value-row_style-font_size'),
        'text_align': getValue('maino-' + index + '-value-row_style-text_align'),
        'text_shadow': getValue('maino-' + index + '-value-row_style-text_shadow'),
        'position': getValue('maino-' + index + '-value-row_style-position'),
        'left': getValue('maino-' + index + '-value-row_style-left'),
        'top': getValue('maino-' + index + '-value-row_style-top'),
        'floating': getValue('maino-' + index + '-value-row_style-floating'),
        'overflow': getValue('maino-' + index + '-value-row_style-overflow'),
        'box_shadow': getValue('maino-' + index + '-value-row_style-box_shadow'),
        'b_radius': getValue('maino-' + index + '-value-row_style-b_radius'),
        'b_top': getValue('maino-' + index + '-value-row_style-b_top'),
        'b_right': getValue('maino-' + index + '-value-row_style-b_right'),
        'b_bottom': getValue('maino-' + index + '-value-row_style-b_bottom'),
        'b_left': getValue('maino-' + index + '-value-row_style-b_left'),
        'color': getValue('maino-' + index + '-value-row_style-color'),
        'color_opacity': getValue('maino-' + index + '-value-row_style-color_opacity'),
        'use_bg_color': getValue('maino-' + index + '-value-row_style-use_bg_color'),
        'bg_c': getValue('maino-' + index + '-value-row_style-bg_c'),
        'bg_color_opacity': getValue('maino-' + index + '-value-row_style-bg_color_opacity'),
        'paralax': getCheckBox('maino-' + index + '-value-row_style-paralax'),
        'image': getValue('maino-' + index + '-value-row_style-image'),
        'bg_url': getValue('maino-' + index + '-value-row_style-bg_url'),
        'el_pg_link': getValue('maino-' + index + '-value-row_style-el_pg_link'),
        'el_url_link': getValue('maino-' + index + '-value-row_style-el_url_link'),
        'new_tab':getCheckBox('maino-' + index + '-value-row_style-new_tab'),
        'css_code': getValue('maino-' + index + '-value-row_style-css_code'),
        'h_use_bg_color': getCheckBox('maino-' + index + '-value-row_style-hover_styling-h_use_bg_color')
    }
}