<template>
  <q-editor v-model="editor"
            :disable="disable_editor"
            toolbar-bg="grey-3"
            ref="editor"
            :content-style="{ fontFamily: Calibri, }"
            @click="initEditor"
            :toolbar="[
            [{
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
            {
              label: $q.lang.editor.fontSize,
              icon: $q.iconSet.editor.fontSize,
              fixedLabel: true,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'size-2',
                'size-1',
              ]
            },{
              label: $q.lang.editor.default_font,
              icon: $q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
              ]
            },'token', 'removeFormat', 'bold', 'italic', 'strike', 'underline', 'subscript', 'superscript', 'quote', 'unordered', 'ordered', 'outdent', 'indent', 'undo', 'redo'],
      ]"
            :fonts="fonts">
    <template v-slot:token>
      <q-btn-dropdown dense no-caps ref="token" no-wrap unelevated color="white" text-color="primary" label="Higlight / Text Color" size="sm">
        <q-list dense>
          <q-item tag="label" clickable @click="color('backColor', highlight)">
            <q-item-section side>
              <q-icon name="highlight" />
            </q-item-section>
            <q-item-section>
              <q-color v-model="highlight" default-view="palette" no-header no-footer :palette="[
        '#ffccccaa', '#ffe6ccaa', '#ffffccaa', '#ccffccaa',
        '#ccffe6aa', '#ccffffaa', '#cce6ffaa', '#ccccffaa', '#e6ccffaa', '#ffccffaa', '#ff0000aa', '#ff8000aa', '#ffff00aa', '##00ff00aa', '#00ff80aa', '#00ffffaa', '#0080ffaa', '#0000ffaa', '#8000ffaa', '#ff00ffaa'
      ]" class="my-picker" />
            </q-item-section>
          </q-item>
          <q-item tag="label" clickable @click="color('foreColor', foreColor)">
            <q-item-section side>
              <q-icon name="format_paint" />
            </q-item-section>
            <q-item-section>
              <q-color v-model="foreColor" no-header no-footer default-view="palette" :palette="[
        '#ff0000', '#ff8000', '#ffff00', '##00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff'
      ]" class="my-picker" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </template>
  </q-editor>
</template>
<script>
  export default {
    props:['disable_editor'],
    data() {
      return {
        foreColor: '#000000',
        highlight: '#ffff00aa',
        editor: 'Select some text,' +' then select a highlight or text color!',
        fonts:{
          default_font: 'Calibri',
          calibri_body: 'Calibri',
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana'
        }
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.initEditor();
      })
    },
    methods: {
      initEditor(){
        
        // console.log(document.getElementsByTagName("font"), "FONTS");
        document.querySelector(".q-editor__toolbars-container").addEventListener('click', () => {        
          let fontSize = document.getElementsByTagName("font");
          let fontSizeCount = fontSize.length;
          for(var i = 0; i < fontSizeCount; i++){
            let text = fontSize[i].innerHTML;
            switch(text){
              case "Very small":
                fontSize[i].innerHTML = "10 PT";
                document.querySelector("font");
                break;
              case "A bit small":
                fontSize[i].innerHTML = "11 PT";
                break;
            }
            console.log();
          }
          
        });
      },
      color(cmd, name) {
        const edit = this.$refs.editor
        this.$refs.token.hide()
        edit.caret.restore()
        edit.runCmd(cmd, name)
        edit.focus()
      }
    }
  }
</script>
