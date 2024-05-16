import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.StrUtil;

import java.io.File;
import java.nio.charset.StandardCharsets;


public class Main {
    public static void main(String[] args) {
        String dir = "D:\\github\\MyJangHu\\jh-web\\ls\\src\\entity\\card\\spells\\v28_0_0_189384";
        String type = "Spell";
        String version = "28";
        // 处理 CardStorage
        StringBuilder stringBuilder = new StringBuilder(
            "const CardStorage"+ StrUtil.upperFirst(type) +" = new Map<String, any>();\n" );
        FileUtil.loopFiles(dir).forEach(file -> {
            if (file.getName().contains(".test.ts")) {

            } else if (file.getName().contains("CardStorage")) {

            } else if (file.getName().contains(".ts")) {
                // 处理
                String s = FileUtil.readString(file, StandardCharsets.UTF_8);
                String name = file.getName().replace(".ts","");
                if (s.contains("class extends")) {
                    FileUtil.writeString(s.replace("class extends", "class " + name + version + " extends"),
                        file, StandardCharsets.UTF_8);
                } else if (!s.contains(version + " extends ")) {
                    FileUtil.writeString(s.replace(" extends ", version + " extends "), file, StandardCharsets.UTF_8);
                }
                stringBuilder.append("import " + name + version + " from \"./"+ name +"\";");
                stringBuilder.append("\n");
                stringBuilder.append("CardStorage"+StrUtil.upperFirst(type)+".set(\""+ name +"\", " + name + version +");");
                stringBuilder.append("\n");
            }
        });
        stringBuilder.append("export default CardStorage"+ StrUtil.upperFirst(type));
        FileUtil.writeString(stringBuilder.toString(),new File(dir+"\\CardStorage"+ StrUtil.upperFirst(type)+".ts"),StandardCharsets.UTF_8);
    }
}
